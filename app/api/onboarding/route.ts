export const runtime = "nodejs";

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

interface OnboardingRequest {
  message?: string;
  history?: HistoryMessage[];
  session_id?: string;
}

const SYSTEM_PROMPT = `You are Elevair's onboarding assistant. Collect client info quickly through a short, friendly conversation. Be efficient — this should take 3-4 exchanges, not 10.

EXCHANGE 1: After they tell you their business name, ask for:
- What services they offer
- Phone number and address
- Business hours

EXCHANGE 2: Ask for:
- Their website URL (if they have one)
- Who their ideal customer is
- The top 3-5 questions customers always ask them

EXCHANGE 3: Ask for:
- Best contact name and email
- Any brand colors or style preferences
- Anything specific the AI should know or avoid saying

EXCHANGE 4 (if needed): Clarify anything missing, then generate the brief.

Rules:
- Group multiple questions together — don't ask one at a time
- Be warm but efficient. Respect their time.
- If they give you a lot of info at once, acknowledge it and skip ahead
- Once you have enough info, immediately generate the brief

When ready, output the brief wrapped in <BRIEF>...</BRIEF> tags:
<BRIEF>
# Client Brief: [Business Name]

**Services:** ...
**Phone:** ...
**Address:** ...
**Hours:** ...
**Website:** ...
**Target Customers:** ...
**FAQs:**
1. ...
2. ...
3. ...
**Brand Colors/Style:** ...
**AI Instructions:** ...
**Contact:** [Name] — [Email]
</BRIEF>

After the brief, tell them: "All set! Our team will review this and reach out within 24 hours to schedule your kickoff call."`;

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as OnboardingRequest;
    const { message, history } = body;

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Missing message" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Missing ANTHROPIC_API_KEY" }, { status: 500 });
    }

    // Build messages array
    const messages: HistoryMessage[] = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role === "user" || msg.role === "assistant") {
          messages.push({ role: msg.role, content: msg.content });
        }
      }
    }
    messages.push({ role: "user", content: message });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "Anthropic API error");
      return Response.json({ error: text }, { status: response.status || 500 });
    }

    const data = (await response.json()) as {
      content?: Array<{ type: string; text?: string }>;
    };

    const assistantText =
      data.content
        ?.filter((block) => block.type === "text")
        .map((block) => block.text ?? "")
        .join("") ?? "";

    // Check for brief
    const briefMatch = assistantText.match(/<BRIEF>([\s\S]*?)<\/BRIEF>/);
    let reply = assistantText;
    let briefSaved = false;
    let brief: string | undefined;

    if (briefMatch) {
      brief = briefMatch[1].trim();
      briefSaved = true;
      reply = assistantText.replace(/<BRIEF>[\s\S]*?<\/BRIEF>/, "").trim();
      if (!reply) {
        reply = "All set! Our team will review this and reach out within 24 hours to schedule your kickoff call.";
      }

      // Save brief as a GitHub Issue on agency-hub
      await saveToGitHub(brief).catch(() => {
        // Non-blocking — if GitHub save fails, the user still gets their response
      });
    }

    const result: { reply: string; brief_saved: boolean; brief?: string } = {
      reply,
      brief_saved: briefSaved,
    };
    if (brief) result.brief = brief;

    return Response.json(result);
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }
}

async function saveToGitHub(brief: string): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return;

  // Extract business name from brief
  const nameMatch = brief.match(/# Client Brief:\s*(.+)/);
  const businessName = nameMatch ? nameMatch[1].trim() : "New Client";

  const response = await fetch(
    "https://api.github.com/repos/campbellhendee/agency-hub/issues",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        title: `New onboarding: ${businessName}`,
        body: `## Onboarding Brief\n\nCollected via elevair.org/onboarding.html\n\n${brief}`,
        labels: ["new-client"],
        assignees: ["campbellhendee", "walkerd00000"],
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    console.error("GitHub issue creation failed:", text);
  }
}
