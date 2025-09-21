import CTAButton from "../../components/CTAButton";
import { Workflow, Wrench, GraduationCap, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";

export const metadata = {
  title: "Process — Elevair",
  description:
    "Our simple process: discover & plan, build & install, train & launch, optimize & grow. Practical AI that books more calls without hiring.",
};

type StepItem = {
  title: string;
  desc: string;
  icon: ReactNode;
  get: string[];
  need: string[];
  lead?: string;
};

export default function ProcessPage() {
  const steps: StepItem[] = [
    {
      title: "Step 1 — Discover & Plan",
      desc:
        "We analyze how your business actually runs—from first contact to job done—and pinpoint the few places where AI will save time or book more calls. You’ll get a short plan with clear “do this first” steps.",
      lead: "We start with how you really work, not a template.",
      icon: <Workflow className="h-5 w-5" />,
      get: ["Discovery report (workflow + gaps)", "Prioritized action plan (1–2 pages)"],
      need: ["Quick kickoff call", "View-only access to current forms/CRM (if any)"],
    },
    {
      title: "Step 2 — Build & Install",
      desc:
        "We implement the right tools for you: AI sales rep, chatbot & intake, booking systems, follow‑ups, and CRM workflows. Everything is clean, fast, and reversible.",
      lead: "We install the smallest set of tools that actually move numbers.",
      icon: <Wrench className="h-5 w-5" />,
      get: ["Configured chatbot/intake", "Booking + follow‑ups", "CRM logging + workflows"],
      need: ["Calendar + CRM access", "Brand voice examples (optional)"],
    },
    {
      title: "Step 3 — Train & Launch",
      desc:
        "We hand over simple guides and short Looms so your team can use the new system right away—no technical background needed.",
      lead: "Your team should be able to use this today, not ‘after training.’",
      icon: <GraduationCap className="h-5 w-5" />,
      get: ["Short Loom videos", "1‑page SOPs", "Slack/Email launch notes"],
      need: ["A point‑of‑contact for a quick live walkthrough"],
    },
    {
      title: "Step 4 — Optimize & Grow",
      desc:
        "We track performance, improve what works, and expand AI into new areas (retention, reviews, upsells) as your business grows.",
      lead: "We track outcomes and push the next easy wins.",
      icon: <TrendingUp className="h-5 w-5" />,
      get: ["KPI tracking", "Tuning & experiments", "Roadmap for next wins"],
      need: ["Feedback on what works", "Basic performance data"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative mx-auto max-w-3xl px-6 py-16">
        {/* Clean header (no background behind H1/intro) */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Process: AI That Works for Your Business — End to End
          </h1>
          <p className="text-lg text-slate-300">
            We keep it simple: learn your workflow, install what helps, train your team, then keep improving.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Plain‑English handoff</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Fast, clean installs</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Reversible by design</span>
          </div>
        </header>

        {/* Background only behind the body content for depth */}
        <div className="relative">
          <div aria-hidden className="absolute inset-0 -z-10 bg-process" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <StepPanel key={s.title} icon={s.icon} title={s.title} lead={s.lead}>
                <p className="text-slate-300">{s.desc}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <BulletBlock title="What you get" bullets={s.get} />
                  <BulletBlock title="What we need" bullets={s.need} />
                </div>

                {i === 1 && <InlineCTA />}
              </StepPanel>
            ))}
          </div>

          <ProofStrip />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton href="/book" placement="section" variant="primary">
              Book a Free 30‑min Teardown
            </CTAButton>
            <CTAButton href="/contact" placement="section" variant="secondary">
              Contact Us
            </CTAButton>
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
}

function StepPanel({ icon, title, lead, children }: { icon: ReactNode; title: string; lead?: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />
      <div className="flex items-start gap-4">
        <div className="shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-cyan-400/10 text-cyan-300" aria-hidden>
          <span className="flex items-center justify-center text-[18px] leading-none">{icon}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
          {lead && <p className="text-slate-400 text-sm mt-1">{lead}</p>}
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </section>
  );
}

function BulletBlock({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-200 mb-1">{title}</h3>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-slate-400 flex gap-2">
            <span className="text-cyan-300">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InlineCTA() {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-slate-300">
        <Sparkles className="h-4 w-4 text-cyan-300" />
        <span>Want to see a sample setup for your workflow?</span>
      </div>
      <CTAButton href="/book" placement="section" variant="primary" className="whitespace-nowrap">
        See a 30‑min Teardown
      </CTAButton>
    </div>
  );
}

function ProofStrip() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <blockquote className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
        “We went from scattered leads to consistent bookings in two weeks. The handoff was simple.”
      </blockquote>
      <blockquote className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
        “Clear plan, quick install, easy to use. It removed a lot of manual follow‑ups.”
      </blockquote>
    </div>
  );
}

function FAQ() {
  return (
    <div className="mt-10">
      <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-cyan-300" /> Common questions
      </h3>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-medium text-slate-200">What if our workflows are messy?</p>
          <p className="text-sm text-slate-400 mt-1">We start simple. We’ll map gaps and ship the smallest wins first.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-medium text-slate-200">We don’t have a CRM yet—ok?</p>
          <p className="text-sm text-slate-400 mt-1">Yes. We’ll plug into what you have, or set up a lightweight CRM.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-medium text-slate-200">How much time do you need from us?</p>
          <p className="text-sm text-slate-400 mt-1">Short kickoff + quick approvals. We do the installs and handover.</p>
        </div>
      </div>
    </div>
  );
}
