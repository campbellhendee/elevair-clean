"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Send, Sparkles, Clock, Bot, User, Loader2, Rocket, BookOpenCheck, PlugZap, MessageSquare } from "lucide-react";

type Msg = { id: string; role: "user" | "assistant" | "system"; content: string };

const SUGGESTIONS = [
  "What can you automate?",
  "How do follow-ups work?",
  "Can you integrate with my tools?",
  "How much does it cost?",
  "Book a quick walkthrough",
];

function pickResponse(q: string): string {
  const s = q.toLowerCase();
  if (/(price|cost|pricing|plan)/.test(s)) {
    return (
      "We keep pricing simple: start with a focused rollout (inbound capture + instant follow‑ups), then expand only if it drives results. Most teams begin on a monthly plan that includes setup, tuning, and ongoing improvements. Want a quick rundown or a tailored estimate?"
    );
  }
  if (/(follow.?up|speed|response)/.test(s)) {
    return (
      "We capture leads instantly, reply within seconds with context‑aware messages, and keep nudging until a meeting is booked. Missed calls and web forms are routed into one clean queue with automatic reminders and handoffs. You choose tone; we handle consistency."
    );
  }
  if (/(integrat|tool|hubspot|zapier|make|twilio|calendar)/.test(s)) {
    return (
      "Yes. Common integrations: HubSpot/CRM, calendars, Twilio, email, and web chat. We’ll map your current flow, then connect only what matters so the system stays simple and measurable."
    );
  }
  if (/(automate|do|capabilit|what can you)/.test(s)) {
    return (
      "Typical wins: capture web traffic, qualify, route by rules, and book meetings automatically. We also standardize notes and create clean CRM entries so your pipeline stays accurate without extra clicks."
    );
  }
  if (/(book|demo|call|walkthrough)/.test(s)) {
    return (
      "Happy to show a 10‑minute walkthrough. Pick a time on the Book page—we’ll review your current funnel and outline a simple first win."
    );
  }
  return (
    "Great question. We start with a quick discovery, then ship a small automation that proves value in days—not weeks. From there, we expand carefully so it stays reliable and easy to maintain."
  );
}

function useStreamedText(target: string) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("");
    if (!target) return;
    let i = 0;
    const id = setInterval(() => {
      i += Math.max(1, Math.round(target.length / 120));
      setText(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, 12);
    return () => clearInterval(id);
  }, [target]);
  return text;
}

export default function DemoAssistant() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [rawAssistant, setRawAssistant] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "s1",
      role: "assistant",
      content:
        "I’m Elevair’s demo assistant. Ask how we automate follow‑ups, integrations, or pricing—this is a simulated preview (no backend).",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  const streamed = useStreamedText(rawAssistant);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamed]);

  const onSend = async (q?: string) => {
    const content = (q ?? input).trim();
    if (!content || loading) return;
    const user: Msg = { id: cryptoRandom(), role: "user", content };
    setMessages((m) => [...m, user]);
    setInput("");
    setLoading(true);
    setRawAssistant("");

    // Try live API first
    try {
      const history = messages
        .filter((m) => m.role !== "system")
        .map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...history, { role: "user", content }] }),
      });

      if (!res.ok || !res.body) throw new Error("no-stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      let full = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx;
        while ((idx = buffer.indexOf("\n")) >= 0) {
          const line = buffer.slice(0, idx).trim();
          buffer = buffer.slice(idx + 1);
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (!data || data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json?.choices?.[0]?.delta?.content || "";
            if (delta) {
              full += delta;
              setRawAssistant(full);
            }
          } catch {}
        }
      }

      // finalize
      if (full) {
        setMessages((m) => [...m, { id: cryptoRandom(), role: "assistant", content: full }]);
        setRawAssistant("");
        setLoading(false);
        return;
      }
      // fall through to demo if nothing streamed
      throw new Error("empty");
    } catch (err) {
      // Demo fallback
      const answer = pickResponse(content);
      setRawAssistant("");
      setTimeout(() => {
        setRawAssistant(answer);
        const assistant: Msg = { id: cryptoRandom(), role: "assistant", content: answer };
        setTimeout(() => {
          setMessages((m) => [...m, assistant]);
          setRawAssistant("");
          setLoading(false);
        }, Math.min(2500, Math.max(600, answer.length * 8)));
      }, 380);
    }
  };

  const pendingAssistant = useMemo<Msg | null>(() => {
    if (!streamed) return loading ? { id: "pending", role: "assistant", content: "" } : null;
    return { id: "pending", role: "assistant", content: streamed };
  }, [streamed, loading]);

  return (
    <section className="container-section pt-0">
      <div className="max-w-5xl mx-auto">
        <div className="card-surface p-0 overflow-hidden">
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 grid place-items-center shadow-cyan-500/20 shadow">
                <Sparkles className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <div className="font-semibold">Ask Elevair</div>
                <div className="text-xs text-slate-400">Live AI when available; otherwise a quick simulation</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
              <PlugZap className="h-4 w-4" />
              <span>CRM, calendar, and messaging friendly</span>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 sm:px-6 py-5">
            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mb-4">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  className="btn-secondary !py-1.5 !px-3 text-sm"
                  onClick={() => onSend(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="space-y-3 max-h-[44vh] overflow-y-auto pr-1">
              {messages.map((m) => (
                <Message key={m.id} role={m.role} content={m.content} />
              ))}
              {pendingAssistant && (
                <Message role="assistant" content={pendingAssistant.content || ""} thinking={loading && !pendingAssistant.content} />
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                onSend();
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about automation, follow‑ups, or pricing…"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 outline-none focus:border-cyan-400/40"
              />
              <button
                type="submit"
                className="btn-primary !px-4"
                aria-label="Send"
                disabled={loading}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>

            {/* Footer note */}
            <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Powered by a live API if configured; falls back to a demo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Message({ role, content, thinking }: { role: "user" | "assistant" | "system"; content: string; thinking?: boolean }) {
  const isUser = role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-md bg-cyan-500/20 border border-cyan-400/20 grid place-items-center text-cyan-300">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-cyan-500/20 text-cyan-100 border border-cyan-400/30"
            : "bg-white/[.04] text-slate-200 border border-white/10"
        }`}
      >
        {thinking ? (
          <span className="inline-flex items-center gap-2 text-slate-400">
            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Thinking
          </span>
        ) : (
          content
        )}
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-md bg-white/10 grid place-items-center text-slate-200">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}

function cryptoRandom() {
  try {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    return `${Date.now().toString(36)}-${a[0].toString(36)}`;
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }
}
