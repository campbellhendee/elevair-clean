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

interface OnboardingResponse {
  reply: string;
  brief_saved: boolean;
  brief?: string;
}

const SYSTEM_PROMPT = `You are Elevair's onboarding assistant. Your job is to collect all the information needed to build a client's AI system through a friendly conversation.

You need to collect:
1. Business name and what they do
2. Their services (list them)
3. Target customers — who are they trying to reach?
4. Phone number, address, service area
5. Business hours
6. Website URL (if they have one)
7. Brand colors (or preferred look/feel)
8. Top 5 most common customer questions (FAQs)
9. Any specific instructions for the AI (what to say, what to avoid)
10. Main contact person's name and email

Rules:
- Ask 1-2 questions at a time, not a wall of questions
- Be warm and conversational, not robotic
- Acknowledge their answers before asking the next question
- If they give partial info, ask a follow-up
- After collecting everything, generate a summary wrapped in <BRIEF>...</BRIEF> tags

When you have all the info, output the brief like this:
<BRIEF>
# Client Brief: [Business Name]

## Business Info
- Name: ...
- Services: ...
- Hours: ...
- Phone: ...
- Address: ...
- Service Area: ...
- Website: ...

## Target Customers
...

## Brand
- Colors: ...
- Style: ...

## FAQs
1. Q: ... A: ...
2. Q: ... A: ...

## AI Instructions
...

## Contact
- Name: ...
- Email: ...
</BRIEF>`;

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

    // Build messages array from history + new message
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

    // Check for brief in the response
    const briefMatch = assistantText.match(/<BRIEF>([\s\S]*?)<\/BRIEF>/);
    let reply = assistantText;
    let briefSaved = false;
    let brief: string | undefined;

    if (briefMatch) {
      brief = briefMatch[1].trim();
      briefSaved = true;
      // Strip the BRIEF tags from the reply shown to the user
      reply = assistantText.replace(/<BRIEF>[\s\S]*?<\/BRIEF>/, "").trim();
      // If the reply is empty after stripping, provide a default message
      if (!reply) {
        reply =
          "I've compiled all your information into a brief. Your onboarding summary is ready!";
      }
    }

    const result: OnboardingResponse = { reply, brief_saved: briefSaved };
    if (brief) {
      result.brief = brief;
    }

    return Response.json(result);
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }
}
