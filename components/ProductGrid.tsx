import { ReactNode } from "react";
import { BarChart3, Bot, CalendarDays, ClipboardList, Mail, Network, Users, Workflow } from "lucide-react";

type Product = {
  key: string;
  name: string;
  blurb: string;
  what: string;
  get: string;
  why: string;
  icon?: ReactNode;
};

const PRODUCTS: Product[] = [
  {
    key: "hub",
    name: "Elevair Hub (your CRM)",
    blurb: "Central lead & contact timeline, notes, and deals in one place.",
    what: "One place for every lead, note, and deal.",
    get: "Easy pipeline view; timelines for each contact; tasks that keep your team moving.",
    why: "Nothing slips. Anyone can see “who said what” and “what’s next.”",
    icon: <Users className="h-6 w-6" />,
  },
  {
    key: "flows",
    name: "Elevair Flows (automations)",
    blurb: "Triggered workflows for routing, follow-ups, reminders, and SLAs.",
    what: "Prebuilt workflows that route new leads, send follow‑ups, and set reminders.",
    get: "“New lead” alerts, 5‑touch follow‑ups, stop rules when someone replies.",
    why: "Speed + consistency = more booked calls without more staff.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    key: "outreach",
    name: "Elevair Outreach (outbound)",
    blurb: "Sequenced email/DM/call tasks for targeted prospecting.",
    what: "A done‑for‑you cold email/DM engine.",
    get: "Target lists, warmup, proven scripts, scheduled sends, replies into your calendar/CRM.",
    why: "Daily pipeline of conversations with the right buyers.",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    key: "agent",
    name: "Elevair Agent (AI)",
    blurb: "Answers inbound, drafts replies, summarizes calls and action items.",
    what: "A helpful assistant that answers inbound questions, drafts replies, and summarizes calls.",
    get: "Instant answers on your site, faster email replies, action items after every call.",
    why: "You look responsive 24/7 and fewer leads go cold.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    key: "insight",
    name: "Elevair Insight (analytics)",
    blurb: "Pipeline & funnel insights with simple performance trends.",
    what: "Simple funnel and revenue views (no fluff).",
    get: "Leads, win rate, speed‑to‑lead, and what’s working.",
    why: "You’ll know where to push for more revenue.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    key: "schedule",
    name: "Elevair Schedule (scheduler)",
    blurb: "Booking links, round-robin routing, and no-show handling.",
    what: "Booking links and round‑robin routing.",
    get: "Fewer back‑and‑forth emails; reminders and no‑show handling.",
    why: "More meetings with less hassle.",
    icon: <CalendarDays className="h-6 w-6" />,
  },
  {
    key: "intake",
    name: "Elevair Intake (forms)",
    blurb: "Lead capture forms with UTM attribution and spam protection.",
    what: "Lead forms with spam protection and UTM capture.",
    get: "Clean submissions, contact info, source tracking.",
    why: "Better targeting and follow‑ups that convert.",
    icon: <ClipboardList className="h-6 w-6" />,
  },
  {
    key: "coach",
    name: "Elevair Coach (call coach)",
    blurb: "Call recording, transcription, and next-step coaching prompts.",
    what: "Call recording, transcripts, and next steps.",
    get: "Key moments highlighted and “do this next” notes.",
    why: "Reps get better fast; fewer deals dropped.",
    icon: <Network className="h-6 w-6" />,
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">
            The Elevair Stack
          </h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Everything you need to capture more leads, book more calls, and automate follow-up—without adding headcount.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.key}
              className="group h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{p.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{p.blurb}</p>
              <details className="mt-4 rounded-xl border border-white/10 bg-white/[.02] open:bg-white/[.04]">
                <summary className="cursor-pointer list-none px-4 py-2 text-sm font-semibold">Learn more</summary>
                <div className="px-4 py-3 text-slate-300 text-sm">
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium text-white">What it is</dt>
                      <dd>{p.what}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-white">What you get</dt>
                      <dd>{p.get}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-white">Why it matters</dt>
                      <dd>{p.why}</dd>
                    </div>
                  </dl>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
