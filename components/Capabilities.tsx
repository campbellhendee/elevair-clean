"use client";

import React from "react";
import CTAButton from "./CTAButton";
import {
  Bot,
  Calendar,
  ChartNoAxesColumn,
  ClipboardCheck,
  Inbox,
  Layers,
  Link2,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

type Item = {
  name: string;
  tagline: string;
  icon: React.ElementType;
};

const items: Item[] = [
  {
    name: "Elevair Hub",
    tagline: "Unified CRM — contacts, deals, and conversation history in one place.",
    icon: Users,
  },
  {
    name: "Elevair Flows",
    tagline: "Automations that route leads, trigger follow‑ups, and remind reps.",
    icon: Layers,
  },
  {
    name: "Elevair Outreach",
    tagline: "Outbound engine for sequences across email, DM, and call tasks.",
    icon: Mail,
  },
  {
    name: "Elevair Agent",
    tagline: "AI that replies, summarizes calls, and proposes next best actions.",
    icon: Bot,
  },
  {
    name: "Elevair Insight",
    tagline: "Funnel and revenue analytics to show what’s working — and what isn’t.",
    icon: ChartNoAxesColumn,
  },
  {
    name: "Elevair Schedule",
    tagline: "Booking without back‑and‑forth — round‑robin and no‑show handling.",
    icon: Calendar,
  },
  {
    name: "Elevair Intake",
    tagline: "High‑converting forms with attribution and spam protection built‑in.",
    icon: Inbox,
  },
  {
    name: "Elevair Coach",
    tagline: "Call recording and coaching prompts so reps never miss next steps.",
    icon: ClipboardCheck,
  },
  {
    name: "Elevair Integrations",
    tagline: "Snap into your stack with secure, reliable connections.",
    icon: Link2,
  },
];

export default function Capabilities() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">
            What’s inside the Elevair stack
          </h2>
          <p className="mt-2 text-slate-400 text-sm md:text-base">
            Productized building blocks — minimal, fast, and focused on revenue.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map(({ name, tagline, icon: Icon }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 md:p-6 transition"
            >
              {/* Subtle glow frame (very light by default, stronger on hover) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/10 shadow-[0_0_30px_0_rgba(34,211,238,0.06)] group-hover:ring-cyan-400/25 group-hover:shadow-[0_0_55px_0_rgba(34,211,238,0.14)] transition duration-300" />

              {/* Soft gradient line at top */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              {/* Very faint ambient blob on hover */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/20 p-2 shrink-0 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold leading-tight">{name}</h3>
                  <p className="mt-1.5 text-slate-400 text-sm">{tagline}</p>
                </div>
              </div>

              <div className="relative mt-4">
                <CTAButton href="/book" placement="section" variant="secondary" className="text-xs">
                  Book a free consultation
                  <Sparkles className="h-3.5 w-3.5" />
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
