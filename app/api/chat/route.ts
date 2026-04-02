export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = (await req.json()) as { messages?: ChatMessage[] };
    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid payload", { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response("Missing ANTHROPIC_API_KEY", { status: 500 });
    }

    // Build system prompt
    const baseSystem =
      `You are Elevair's AI assistant on our website. Be concise, friendly, and helpful.\n` +
      `You help visitors understand what Elevair does: we build AI automation for local businesses — AI receptionists, smart scheduling, and lead follow-up systems.\n\n` +
      `Key facts:\n` +
      `- Pricing: Starter $497/mo, Growth $997/mo, Scale $1,997/mo\n` +
      `- No setup fees, no contracts, cancel anytime\n` +
      `- Systems go live within 1-2 weeks\n` +
      `- Founded by Campbell Hendee and Walker Deyo in Austin, TX\n\n` +
      `Keep responses to 2-3 sentences max unless asked for detail.\n` +
      `When someone seems interested, suggest booking a call at /book.`;

    // Lightweight company knowledge retrieval
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const query = (lastUser?.content ?? "").slice(0, 800);
    let knowledge = await getCompanyKnowledge(query);
    // Ensure people-related queries include the Team section
    if (/\b(name|names|who|founder|founders|team|member|members|owner|owners)\b/i.test(query)) {
      const team = await getCompanySection("Team");
      if (team && (!knowledge || !knowledge.includes(team))) {
        knowledge = knowledge ? `${knowledge}\n\n${team}` : team;
      }
    }

    const systemPrompt = knowledge
      ? `${baseSystem}\n\nCompany knowledge (use for Elevair-specific answers; do not invent unknown details):\n\n${knowledge}`
      : baseSystem;

    // Filter messages to only user/assistant roles for Anthropic
    const anthropicMessages = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));

    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: systemPrompt,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const text = await upstream.text().catch(() => "Upstream error");
      return new Response(text, { status: upstream.status || 500 });
    }

    // Transform Anthropic SSE stream to OpenAI-compatible format
    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";

    const stream = new ReadableStream({
      async pull(controller): Promise<void> {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            // Flush any remaining buffer
            if (buffer.trim()) {
              processBuffer(buffer, controller, encoder);
            }
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
            return;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last potentially incomplete line in the buffer
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6).trim();
              if (!data) continue;
              try {
                const parsed = JSON.parse(data) as {
                  type?: string;
                  delta?: { type?: string; text?: string };
                };
                if (
                  parsed.type === "content_block_delta" &&
                  parsed.delta?.type === "text_delta" &&
                  parsed.delta.text
                ) {
                  const openaiChunk = JSON.stringify({
                    choices: [{ delta: { content: parsed.delta.text } }],
                  });
                  controller.enqueue(encoder.encode(`data: ${openaiChunk}\n\n`));
                }
              } catch {
                // Skip unparseable lines
              }
            }
          }
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch {
    return new Response("Bad request", { status: 400 });
  }
}

function processBuffer(
  buffer: string,
  controller: ReadableStreamDefaultController,
  encoder: TextEncoder,
): void {
  const lines = buffer.split("\n");
  for (const line of lines) {
    if (line.startsWith("data: ")) {
      const data = line.slice(6).trim();
      if (!data) continue;
      try {
        const parsed = JSON.parse(data) as {
          type?: string;
          delta?: { type?: string; text?: string };
        };
        if (
          parsed.type === "content_block_delta" &&
          parsed.delta?.type === "text_delta" &&
          parsed.delta.text
        ) {
          const openaiChunk = JSON.stringify({
            choices: [{ delta: { content: parsed.delta.text } }],
          });
          controller.enqueue(encoder.encode(`data: ${openaiChunk}\n\n`));
        }
      } catch {
        // Skip unparseable lines
      }
    }
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

// Return a single named section by its top-level heading (e.g., "Team")
async function getCompanySection(title: string): Promise<string | null> {
  try {
    if (!COMPANY_MD_CACHE) {
      const p = path.join(process.cwd(), "content", "company.md");
      COMPANY_MD_CACHE = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
    }
    const md = COMPANY_MD_CACHE || "";
    if (!md) return null;
    const parts = md.split(/\n(?=# )/g).map((s) => s.trim());
    const match = parts.find((s) => s.toLowerCase().startsWith(`# ${title.toLowerCase()}`));
    return match || null;
  } catch {
    return null;
  }
}
