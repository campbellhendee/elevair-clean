
"use client";

import React from "react";
import ProductGrid from "../components/ProductGrid";
import { ArrowRight, CheckCircle2, BarChart3, Zap, Bot, Mail, Calendar, Shield, Bolt, Workflow, LineChart } from "lucide-react";
import CTAButton from "../components/CTAButton";
import { trackBookClick } from "../lib/analytics";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <Differentiators />
  <Services />
      <Process />
      <ResultsCTA />
      <CaseStudies />
  <ProductGrid />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

// Stack details integrated into ProductGrid via inline details/summary.

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Bolt className="h-6 w-6 text-cyan-400" />
          <span className="text-lg font-semibold tracking-tight">Elevair</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#proof" className="hover:text-white">Proof</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
  <CTAButton href="/contact" placement="header" className="hidden md:inline-flex">Contact</CTAButton>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900 to-slate-950" />
      <Container className="relative py-20 md:py-28">
        <div className="flex justify-center">
          <div className="text-center">
            <span className="block text-6xl md:text-8xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-300 via-cyan-200 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,211,238,0.15)]">Elevair</span>
          </div>
        </div>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          We don’t scale teams — we scale revenue.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          We fix slow follow‑ups and leaky funnels fast. We install &lt;5‑minute speed‑to‑lead, 5‑touch follow‑ups, and clean CRM automations so you book more calls in 14–30 days.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/book" placement="hero">Book a free consultation <ArrowRight className="h-4 w-4" /></CTAButton>
          <a href="/#proof" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/5" data-placement="hero-proof" onClick={() => trackBookClick('hero-proof')}>
            See Before/After Results
          </a>
        </div>
        <div className="mt-4 text-slate-300 italic">Installed in 48 hours or month one is free.</div>
      </Container>
    </section>
  );
}

// SocialProof chips intentionally removed for a cleaner layout

function Differentiators() {
  const items = [
    { icon: <Zap className="h-5 w-5" />, title: "Build, not talk", desc: "We install systems that respond instantly, log every lead, and book calls—no 30‑page decks." },
    { icon: <Shield className="h-5 w-5" />, title: "Simple & safe", desc: "Clean, reversible automations. If we get hit by a bus, you still run fine." },
    { icon: <BarChart3 className="h-5 w-5" />, title: "ROI or we’re out", desc: "If we can’t point to revenue impact, we won’t sell it to you." },
  ];
  return (
    <section>
      <Container className="py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="flex items-center gap-3 text-cyan-300">{i.icon}<span className="text-sm uppercase tracking-wide">Why Elevair</span></div>
              <h3 className="mt-3 text-xl font-semibold">{i.title}</h3>
              <p className="mt-2 text-slate-300">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const services = [
    { tag: "Phase 1", title: "AI Growth Audit", price: "Contact for quote", bullets: [
      "60‑min founder interview + funnel review",
      "Map 3–5 leaks, with exact fixes",
      "Notion + Loom delivery (keep it even if we don’t build)",
    ]},
  { tag: "Phase 1", title: "Outreach Automation", price: "Contact for quote", bullets: [
      "Elevair Outbound Engine",
      "ICP lists, copy, warmup, tracking",
      "Replies routed to CRM + calendar",
    ]},
  { tag: "Phase 1", title: "Sales Call Assistant", price: "Contact for quote", bullets: [
      "Auto‑record + transcribe",
      "Auto‑summary + objection library",
      "Coach cards for reps in Elevair CRM",
    ]},
  { tag: "Phase 2", title: "AI Website Chatbot", price: "Contact for quote", bullets: [
      "Answers FAQs, captures lead info",
      "Hands off to human when needed",
      "24/7 lead capture + tagging",
    ]},
  { tag: "Phase 2", title: "Full CRM Automation", price: "Contact for quote", bullets: [
      "Forms → emails → tasks → pipeline",
      "SLA timers, no‑response escalations",
      "Reporting built‑in",
    ]},
  { tag: "Phase 2", title: "RevOps Dashboard", price: "Contact for quote", bullets: [
      "Leads, win rate, speed‑to‑lead",
      "Channel attribution",
      "Owner‑friendly view (no fluff)",
    ]},
  ];
  return (
    <section id="services">
      <Container className="py-18 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we build</h2>
          <span className="text-slate-400 text-sm">Fast wins first. Big systems later.</span>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[.02] p-6 flex flex-col">
              <div className="text-xs uppercase tracking-wide text-cyan-300">{s.tag}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <div className="mt-1 text-slate-300">{s.price}</div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {s.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Audit", desc: "We test your lead flow, response speed, and follow‑up. You get a Loom + Notion roadmap.", icon: <Workflow className="h-5 w-5" /> },
    { title: "Build", desc: "We install forms, CRM, automations, and outreach. Clean and reversible.", icon: <Bot className="h-5 w-5" /> },
    { title: "Train", desc: "Short Looms + one‑pager SOPs. Your team actually uses the thing.", icon: <Mail className="h-5 w-5" /> },
    { title: "Support", desc: "2–4 weeks of tweaks. Then light retainer if you want.", icon: <Calendar className="h-5 w-5" /> },
  ];
  return (
    <section id="process">
      <Container className="py-18 md:py-24">
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Process (simple on purpose)</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="flex items-center gap-3 text-cyan-300">{s.icon}<span className="text-sm uppercase">{s.title}</span></div>
              <p className="mt-3 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ResultsCTA() {
  return (
    <section className="relative">
      <Container className="py-14 md:py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Speed‑to‑lead up, bookings up, revenue up.</h3>
              <p className="mt-2 text-slate-300">If we can’t show impact in 30 days, we shouldn’t be there.</p>
            </div>
            <CTAButton href="/contact" placement="section" variant="secondary">Talk to us</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { name: "Med Spa, Austin", before: "48h avg response, 0 automated follow‑ups", after: "+32% bookings in 21 days", kpi: "Speed‑to‑lead: 48h → 3m" },
    { name: "Roofing Co., Houston", before: "Leads sitting in inbox", after: "+$41k closed in 30 days", kpi: "Follow‑ups: 0 → 5 touches" },
    { name: "Gym, San Marcos", before: "Trial signups leaking", after: "2.1x trials, CAC down 28%", kpi: "Lead → tour: 9% → 19%" },
  ];
  return (
    <section id="proof">
      <Container className="py-18 md:py-24">
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Before / After</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="text-sm text-cyan-300">{c.name}</div>
              <h3 className="mt-2 text-xl font-semibold">{c.after}</h3>
              <p className="mt-3 text-slate-300">Before: {c.before}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1 text-slate-300">
                <LineChart className="h-4 w-4 text-cyan-400" /> {c.kpi}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-400">Example scenario; methodology: traffic × conversion × speed‑to‑lead.</p>
      </Container>
    </section>
  );
}

// ToolStack replaced by ProductGrid

function Pricing() {
  const tiers = [
  { name: "AI Audit", price: "Custom after consultation", points: ["60‑min audit call", "3–5 fixes mapped", "Notion + Loom roadmap"] },
  { name: "Automation Setup", price: "Custom after consultation", points: ["CRM + forms + follow‑ups", "Outbound engine if needed", "Owner training + SOPs"] },
  { name: "Monthly Support", price: "Custom after consultation", points: ["Monitor + iterate", "New campaigns monthly", "Simple dashboard reports"] },
  ];
  return (
    <section id="pricing">
      <Container className="py-18 md:py-24">
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="text-cyan-300 text-sm uppercase">{t.name}</div>
              <div className="mt-1 text-2xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {t.points.map((p) => (<li key={p} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How fast till we see results?", a: "You’ll see faster responses + booked calls within 14–30 days in most cases." },
    { q: "Do you replace our team?", a: "No. We make your current team faster and more consistent." },
    { q: "What if we already have a CRM?", a: "Great. We’ll clean it up, connect the pipes, and make it actually drive revenue." },
    { q: "Performance deals?", a: "Once we have baseline numbers, we’re open to rev‑share on incremental revenue." },
  ];
  return (
    <section>
      <Container className="py-16 md:py-20">
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ (short and honest)</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="relative">
      <Container className="py-18 md:py-24">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(2,6,23,0.8))] p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">Request a free consultation</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Share a bit about your sales flow. We'll respond within 24 hours with quick wins and next steps.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton href="/contact" placement="section">Talk to us <ArrowRight className="h-4 w-4" /></CTAButton>
            <a href="mailto:campbellhendee@elevair.org,williamdeyo@elevair.org?subject=Consultation%20request" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5 inline-flex items-center gap-2">
              Prefer email? growth@elevair.org
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
// Footer is rendered globally in app/layout.tsx
