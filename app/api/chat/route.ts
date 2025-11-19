export const runtime = "nodejs";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages?: ChatMessage[] };
    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid payload", { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response("Missing OPENAI_API_KEY", { status: 500 });
    }

    const system: ChatMessage = {
      role: "system",
      content:
        "You are Elevair’s website assistant. Be concise, friendly, and helpful. " +
        "Focus on automation, follow-ups, integrations, pricing, and booking. " +
        "When appropriate, suggest visiting /book for a quick walkthrough.",
    };
    // Lightweight company knowledge retrieval
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const query = (lastUser?.content ?? "").slice(0, 800);
    const knowledge = await getCompanyKnowledge(query);
    const knowledgeMsg: ChatMessage | null = knowledge
      ? {
          role: "system",
          content:
            "Company knowledge (use for Elevair-specific answers; do not invent unknown details):\n\n" +
            knowledge,
        }
      : null;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
      Authorization: `Bearer ${apiKey}`,
    };
    if (process.env.OPENAI_PROJECT_ID) {
      headers["OpenAI-Project"] = process.env.OPENAI_PROJECT_ID as string;
    }
    if (process.env.OPENAI_ORG_ID) {
      headers["OpenAI-Organization"] = process.env.OPENAI_ORG_ID as string;
    }

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        stream: true,
        messages: knowledgeMsg ? [system, knowledgeMsg, ...messages] : [system, ...messages],
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const text = await upstream.text().catch(() => "Upstream error");
      return new Response(text, { status: upstream.status || 500 });
    }

    return new Response(upstream.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response("Bad request", { status: 400 });
  }
}

// --- Simple knowledge loader and selector ---
import fs from "fs";
import path from "path";

let COMPANY_MD_CACHE: string | null = null;

async function getCompanyKnowledge(query: string): Promise<string | null> {
  try {
    if (!COMPANY_MD_CACHE) {
      const p = path.join(process.cwd(), "content", "company.md");
      COMPANY_MD_CACHE = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
    }
    const md = COMPANY_MD_CACHE || "";
    if (!md) return null;

    // Split by top-level headings and score simple overlap against the query
    const sections = md
      .split(/\n(?=# )/g)
      .map((s) => s.trim())
      .filter(Boolean);

    const q = normalize(query);
    const scored = sections
      .map((s) => ({ s, score: scoreOverlap(q, normalize(s)) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.s)
      .join("\n\n");

    return scored.slice(0, 1500);
  } catch {
    return null;
  }
}

function normalize(t: string): string {
  return (t || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreOverlap(a: string, b: string): number {
  if (!a || !b) return 0;
  const aw = new Set(a.split(" ").filter(Boolean));
  const bw = new Set(b.split(" ").filter(Boolean));
  let hit = 0;
  aw.forEach((w) => {
    if (bw.has(w)) hit++;
  });
  return hit;
}
