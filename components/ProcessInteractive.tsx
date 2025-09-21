"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { Workflow, Wrench, GraduationCap, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";

export default function ProcessInteractive() {
  const steps: StepItem[] = [
    {
      id: "discover",
      title: "Step 1 — Discover & Plan",
      lead: "We start with how you really work, not a template.",
      desc:
        "We analyze how your business actually runs—from first contact to job done—and pinpoint the few places where AI will save time or book more calls. You’ll get a short plan with clear “do this first” steps.",
      icon: <Workflow className="h-5 w-5" />,
      get: ["Discovery report (workflow + gaps)", "Prioritized action plan (1–2 pages)"],
      need: ["Quick kickoff call", "View-only access to current forms/CRM (if any)"],
    },
    {
      id: "build",
      title: "Step 2 — Build & Install",
      lead: "We install the smallest set of tools that actually move numbers.",
      desc:
        "We implement the right tools for you: AI sales rep, chatbot & intake, booking systems, follow‑ups, and CRM workflows. Everything is clean, fast, and reversible.",
      icon: <Wrench className="h-5 w-5" />,
      get: ["Configured chatbot/intake", "Booking + follow‑ups", "CRM logging + workflows"],
      need: ["Calendar + CRM access", "Brand voice examples (optional)"],
    },
    {
      id: "train",
      title: "Step 3 — Train & Launch",
      lead: "Your team should be able to use this today, not ‘after training.’",
      desc:
        "We hand over simple guides and short Looms so your team can use the new system right away—no technical background needed.",
      icon: <GraduationCap className="h-5 w-5" />,
      get: ["Short Loom videos", "1‑page SOPs", "Slack/Email launch notes"],
      need: ["A point‑of‑contact for a quick live walkthrough"],
    },
    {
      id: "optimize",
      title: "Step 4 — Optimize & Grow",
      lead: "We track outcomes and push the next easy wins.",
      desc:
        "We track performance, improve what works, and expand AI into new areas (retention, reviews, upsells) as your business grows.",
      icon: <TrendingUp className="h-5 w-5" />,
      get: ["KPI tracking", "Tuning & experiments", "Roadmap for next wins"],
      need: ["Feedback on what works", "Basic performance data"],
    },
  ];

  const ids = steps.map((s) => s.id) as ReadonlyArray<string>;
  const [activeId, setActiveId] = useState<string>(ids[0]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.15, 0.35, 0.55] }
    );
    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("reveal-visible", e.isIntersecting));
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Top progress bar
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      if (bar) bar.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Progress bar */}
      <div aria-hidden className="fixed left-0 right-0 top-0 h-1 bg-white/5 z-40">
        <div id="progress-bar" className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-0 transition-[width] duration-150" />
      </div>

      <div className="relative mt-6">
        <div aria-hidden className="absolute inset-0 -z-10 bg-process" />

        <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-8">
          {/* Sticky rail (desktop) */}
          <nav className="hidden md:block sticky top-24 self-start">
            <ul className="space-y-2 text-sm">
              {steps.map((s) => (
                <RailLink key={s.id} href={`#${s.id}`} label={s.title.replace(/^Step \d+ — /, "")} active={activeId === s.id} />
              ))}
            </ul>
          </nav>

          {/* Mobile chip bar */}
          <div className="md:hidden mb-2 flex flex-wrap gap-2">
            {steps.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1 rounded-full border text-xs ${
                  activeId === s.id
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {s.title.replace(/^Step \d+ — /, "")}
              </a>
            ))}
          </div>

          {/* Narrative content */}
          <div className="space-y-10">
            {steps.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => { sectionRefs.current[s.id] = el; }}
                className="scroll-mt-28 reveal"
              >
                <StepPanel icon={s.icon} title={s.title} lead={s.lead}>
                  <p className="text-slate-300">{s.desc}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <BulletBlock title="What you get" bullets={s.get} />
                    <BulletBlock title="What we need" bullets={s.need} />
                  </div>
                  {i === 1 && <InlineCTA />}
                </StepPanel>
              </section>
            ))}

            <div className="reveal">
              <ProofStrip />
            </div>

            <div className="reveal">
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <CTAButton href="/book" placement="section" variant="primary">
                  Book a Free 30‑min Teardown
                </CTAButton>
                <CTAButton href="/contact" placement="section" variant="secondary">
                  Contact Us
                </CTAButton>
              </div>
            </div>

            <div className="reveal">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RailLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <a
        href={href}
        className={`block rounded-lg px-3 py-2 transition ${
          active ? "text-cyan-300 bg-white/[0.04] border border-cyan-400/20" : "text-slate-300 hover:bg-white/[0.03]"
        }`}
      >
        {label}
      </a>
    </li>
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

type StepItem = {
  id: string;
  title: string;
  lead?: string;
  desc: string;
  icon: ReactNode;
  get: string[];
  need: string[];
};
