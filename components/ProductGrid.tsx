import { ReactNode } from "react";
import { BarChart3, Bot, CalendarDays, ClipboardList, Mail, Network, Users, Workflow } from "lucide-react";

type Product = {
  key: string;
  name: string;
  blurb: string;
  icon?: ReactNode;
};

const PRODUCTS: Product[] = [
  {
    key: "hub",
    name: "Elevair Hub (your CRM)",
    blurb: "Central lead & contact timeline, notes, and deals in one place.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    key: "flows",
    name: "Elevair Flows (automations)",
    blurb: "Triggered workflows for routing, follow-ups, reminders, and SLAs.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    key: "outreach",
    name: "Elevair Outreach (outbound)",
    blurb: "Sequenced email/DM/call tasks for targeted prospecting.",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    key: "agent",
    name: "Elevair Agent (AI)",
    blurb: "Answers inbound, drafts replies, summarizes calls and action items.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    key: "insight",
    name: "Elevair Insight (analytics)",
    blurb: "Pipeline & funnel insights with simple performance trends.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    key: "schedule",
    name: "Elevair Schedule (scheduler)",
    blurb: "Booking links, round-robin routing, and no-show handling.",
    icon: <CalendarDays className="h-6 w-6" />,
  },
  {
    key: "intake",
    name: "Elevair Intake (forms)",
    blurb: "Lead capture forms with UTM attribution and spam protection.",
    icon: <ClipboardList className="h-6 w-6" />,
  },
  {
    key: "coach",
    name: "Elevair Coach (call coach)",
    blurb: "Call recording, transcription, and next-step coaching prompts.",
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
              <div className="mt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
