"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Zap,
  Check,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Utility: promisified delay                                         */
/* ------------------------------------------------------------------ */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ------------------------------------------------------------------ */
/*  InteractiveCard — 3D tilt + spotlight on hover                     */
/* ------------------------------------------------------------------ */
function InteractiveCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pos = useRef({ x: 0.5, y: 0.5 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    pos.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rotY = (pos.current.x - 0.5) * 6; // max 3deg each side
      const rotX = (pos.current.y - 0.5) * -6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${pos.current.x * 100}% ${pos.current.y * 100}%, rgba(99,102,241,0.06), transparent 40%)`;
      }
    });
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`interactive-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={spotlightRef} className="card-spotlight" />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MagneticButton — CTA that drifts toward cursor                     */
/* ------------------------------------------------------------------ */
function MagneticButton({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      const strength = (1 - dist / 100) * 5;
      btn.style.transform = `translate(${dx * strength / dist * 0.8}px, ${dy * strength / dist * 0.8}px)`;
    }
  }, []);

  const handleLeave = useCallback(() => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0, 0)";
  }, []);

  return (
    <Link
      ref={btnRef}
      href={href}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Rotating phrases for the hero headline                             */
/* ------------------------------------------------------------------ */
const ROTATING_PHRASES = [
  "While You Sleep.",
  "24 Hours a Day.",
  "Without Extra Staff.",
  "So You Don't Have To.",
];

/* ------------------------------------------------------------------ */
/*  Chat mockup messages                                               */
/* ------------------------------------------------------------------ */
const CHAT_MESSAGES = [
  {
    from: "user" as const,
    text: "Do you offer emergency plumbing?",
    time: "2:41 PM",
  },
  {
    from: "ai" as const,
    text: "Yes! We offer 24/7 emergency plumbing. I can book you in — what time works best?",
    time: "2:41 PM",
  },
  {
    from: "user" as const,
    text: "Tomorrow at 2pm",
    time: "2:42 PM",
  },
  {
    from: "ai" as const,
    text: "Done! You're booked for tomorrow at 2:00 PM. You'll receive a confirmation text shortly.",
    time: "2:42 PM",
  },
];

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
interface StatItem {
  prefix?: string;
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
  flash?: boolean;
}

const STATS: StatItem[] = [
  { prefix: "< ", value: 3, suffix: "s", label: "Response time" },
  { display: "24/7", label: "Availability" },
  { value: 0, suffix: "", label: "Missed inquiries", flash: true },
  { value: 48, suffix: "hrs", label: "Time to go live" },
];

/* ------------------------------------------------------------------ */
/*  Pricing data                                                       */
/* ------------------------------------------------------------------ */
const PLANS = [
  {
    name: "Starter",
    price: "$497",
    featured: false,
    features: [
      "1 AI channel",
      "500 conversations/mo",
      "Calendar integration",
      "Email support",
      "Setup in 48 hours",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    featured: true,
    features: [
      "All channels",
      "Unlimited conversations",
      "CRM integration",
      "Smart follow-up sequences",
      "Priority support",
      "Weekly reports",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    featured: false,
    features: [
      "Everything in Growth",
      "Custom AI training",
      "Multi-location",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function Page() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadingIn, setFadingIn] = useState(true);

  /* Chat typing sequence state */
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  /* Refs for GSAP */
  const statsRef = useRef<HTMLElement>(null);
  const statNumRefs = useRef<(HTMLDivElement | null)[]>([]);
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  /* Rotating headline phrases */
  useEffect(() => {
    const interval = setInterval(() => {
      setFadingIn(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setFadingIn(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* Chat typing sequence */
  useEffect(() => {
    let cancelled = false;
    const sequence = async () => {
      await delay(1500);
      for (let i = 0; i < CHAT_MESSAGES.length; i++) {
        if (cancelled) return;
        if (CHAT_MESSAGES[i].from === "ai") {
          setShowTyping(true);
          await delay(600);
          if (cancelled) return;
          setShowTyping(false);
        }
        setVisibleMsgs(i + 1);
        await delay(800);
      }
    };
    sequence();
    return () => { cancelled = true; };
  }, []);

  /* Scroll reveal — lightweight IntersectionObserver, no GSAP */
  useEffect(() => {
    const sections = [statsRef, servicesRef, processRef, pricingRef, ctaRef];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);

            // Stat count-up
            if (entry.target === statsRef.current) {
              STATS.forEach((stat, idx) => {
                const el = statNumRefs.current[idx];
                if (!el || stat.display) return;
                const target = stat.value ?? 0;
                const prefix = stat.prefix || "";
                const suffix = stat.suffix || "";
                let start = 0;
                const duration = 1200;
                const startTime = performance.now();
                const tick = (now: number) => {
                  const progress = Math.min((now - startTime) / duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  start = Math.round(eased * target);
                  el.textContent = `${prefix}${start}${suffix}`;
                  if (progress < 1) requestAnimationFrame(tick);
                  else if (stat.flash) el.classList.add("stat-flash");
                };
                requestAnimationFrame(tick);
              });
            }

            // Stagger children (cards, steps)
            const staggerItems = entry.target.querySelectorAll(".stagger-item");
            staggerItems.forEach((item, i) => {
              (item as HTMLElement).style.transitionDelay = `${i * 120}ms`;
              item.classList.add("revealed");
            });

            // Process line
            if (entry.target === processRef.current && processLineRef.current) {
              processLineRef.current.classList.add("line-drawn");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((ref) => {
      if (ref.current) obs.observe(ref.current);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="text-white">
      {/* ────────────────────────────────────────────────────────────── */}
      {/*  HERO                                                         */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center overflow-clip">
        {/* Aurora gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>

        {/* Grid overlay */}
        <div className="hero-grid" />

        <div>
          {/* Pill badge */}
          <div
            className="hero-badge animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
              Now Accepting Clients
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-headline animate-fade-up font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 max-w-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            AI That Works
            <br />
            <span className="relative inline-grid">
              {/* Invisible longest phrase to hold the width */}
              <span className="invisible col-start-1 row-start-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent" aria-hidden="true">
                Without Extra Staff.
              </span>
              {/* Visible rotating phrase */}
              <span
                className="col-start-1 row-start-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-opacity duration-300"
                style={{ opacity: fadingIn ? 1 : 0 }}
              >
                {ROTATING_PHRASES[phraseIndex]}
              </span>
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="hero-sub animate-fade-up text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            AI that answers every call, books every appointment, and follows up with every lead. Automatically.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-10"
            style={{ animationDelay: "0.3s" }}
          >
            <MagneticButton
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.1] text-white rounded-full px-8 py-4 font-medium hover:bg-white/[0.03] hover:border-white/[0.15] transition-all duration-300"
            >
              See How It Works
            </MagneticButton>
          </div>

          {/* Trust signals */}
          <div
            className="hero-trust animate-fade-up flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-slate-500 mb-16"
            style={{ animationDelay: "0.4s" }}
          >
            <span>3-second response time</span>
            <span className="hidden sm:block h-4 w-px bg-white/[0.08]" />
            <span>Live in under a week</span>
            <span className="hidden sm:block h-4 w-px bg-white/[0.08]" />
            <span>No long-term contracts</span>
          </div>
        </div>

        {/* Chat mockup */}
        <div
          className="hero-mockup animate-fade-up w-full max-w-lg mx-auto"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-1 shadow-[0_0_80px_rgba(99,102,241,0.12)]">
            {/* Mockup inner */}
            <div className="rounded-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium text-white">
                  Elevair AI Assistant
                </span>
                <span className="ml-auto text-[10px] font-mono text-slate-600">
                  Online
                </span>
              </div>

              {/* Messages */}
              <div className="px-4 py-4 space-y-3 min-h-[260px]">
                {CHAT_MESSAGES.slice(0, visibleMsgs).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        msg.from === "user"
                          ? "bg-indigo-500/20 rounded-br-md"
                          : "bg-white/[0.04] rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {msg.text}
                      </p>
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.from === "user"
                            ? "text-indigo-300/50 text-right"
                            : "text-slate-600"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/[0.04]">
                      <div className="typing-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3">
                  <span className="text-sm text-slate-600 flex-1">
                    Type a message...
                  </span>
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-600">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  STATS BAR                                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="scroll-reveal bg-white/[0.02] border-y border-white/[0.06] py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={stat.label}>
                <div
                  ref={(el) => { statNumRefs.current[idx] = el; }}
                  className="font-mono text-3xl md:text-4xl font-bold text-cyan-400"
                >
                  {stat.display ? stat.display : `${stat.prefix || ""}0${stat.suffix || ""}`}
                </div>
                <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  WHAT ELEVAIR DOES                                            */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section ref={servicesRef} className="scroll-reveal relative px-6 py-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400 flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-indigo-500/40" />
              THE PLATFORM
              <span className="h-px w-8 bg-indigo-500/40" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
              What we build
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — AI Receptionist */}
            <InteractiveCard className="service-card stagger-item relative group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mt-5">
                AI Receptionist
              </h3>
              <p className="text-slate-400 mt-3 leading-relaxed">
                Handles calls, chats, and emails around the clock. Trained on your
                business. Qualifies leads and books appointments automatically.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Responds to inquiries in under 3 seconds",
                  "Qualifies leads with smart follow-up questions",
                  "Books directly into your calendar",
                  "Works across chat, SMS, and email",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 mt-6 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Learn more{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </InteractiveCard>

            {/* Card 2 — Smart Scheduling */}
            <InteractiveCard className="service-card stagger-item relative group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mt-5">
                Smart Scheduling
              </h3>
              <p className="text-slate-400 mt-3 leading-relaxed">
                Customers book themselves. Automated confirmations and reminders
                reduce no-shows. Syncs with your existing calendar.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Self-service booking from any channel",
                  "Automated SMS and email reminders",
                  "Reschedule handling without human input",
                  "No-show follow-up sequences",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 mt-6 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Learn more{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </InteractiveCard>

            {/* Card 3 — Lead Automation */}
            <InteractiveCard className="service-card stagger-item relative group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mt-5">
                Lead Automation
              </h3>
              <p className="text-slate-400 mt-3 leading-relaxed">
                Every inquiry gets an instant response. Smart follow-up sequences
                work around the clock until the lead converts.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Instant response to every new lead",
                  "Multi-touch follow-up sequences",
                  "CRM integration and pipeline management",
                  "Weekly performance reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 mt-6 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Learn more{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  HOW IT WORKS — Process Timeline                              */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section ref={processRef} className="scroll-reveal relative px-6 py-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400 flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-indigo-500/40" />
              THE PROCESS
              <span className="h-px w-8 bg-indigo-500/40" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
              How it works
            </h2>
          </div>

          {/* Steps — desktop horizontal / mobile vertical */}
          <div className="relative">
            {/* Horizontal connecting line (desktop) */}
            <div
              ref={processLineRef}
              className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-indigo-500/20"
              style={{ transformOrigin: "left center" }}
            />

            {/* Vertical connecting line (mobile) */}
            <div className="md:hidden absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-indigo-500/20 via-purple-500/40 to-indigo-500/20" />

            <div className="grid md:grid-cols-4 gap-12 md:gap-6">
              {[
                {
                  num: "1",
                  title: "We Learn Your Business",
                  desc: "30-minute call. We map your services, FAQs, tone, and goals.",
                },
                {
                  num: "2",
                  title: "We Build Your AI",
                  desc: "Custom trained on your business. Configured in 24 hours.",
                },
                {
                  num: "3",
                  title: "We Go Live",
                  desc: "Embedded, tested, and live within 48 hours of your first call.",
                },
                {
                  num: "4",
                  title: "We Keep Improving",
                  desc: "Monthly optimization. Your AI gets smarter every week.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="process-step stagger-item relative text-left md:text-center pl-16 md:pl-0"
                >
                  {/* Number circle */}
                  <div className="absolute left-0 md:relative md:left-auto w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold font-heading text-lg md:mx-auto z-10">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mt-0 md:mt-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 max-w-[220px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  PRICING PREVIEW                                              */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section ref={pricingRef} className="scroll-reveal relative px-6 py-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400 flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-indigo-500/40" />
              PRICING
              <span className="h-px w-8 bg-indigo-500/40" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
              Pricing
            </h2>
            <p className="text-lg text-slate-400 mt-4 max-w-lg mx-auto">
              No setup fees. No contracts.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <InteractiveCard
                key={plan.name}
                className={`pricing-card stagger-item relative bg-white/[0.03] backdrop-blur-xl border rounded-[20px] p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-indigo-500/30 scale-[1.02] md:scale-105 pricing-featured"
                    : "border-white/[0.06] hover:border-white/[0.1]"
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h3 className="font-heading text-xl font-bold text-white">
                  {plan.name}
                </h3>

                <div className="mt-4 mb-6">
                  <span className="font-heading text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg text-slate-500">/mo</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                      <span className="text-sm text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={`block w-full text-center rounded-full py-3.5 font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
                      : "border border-white/[0.1] text-white hover:bg-white/[0.03] hover:border-white/[0.15]"
                  }`}
                >
                  Get Started
                </Link>
              </InteractiveCard>
            ))}
          </div>

          {/* Sub-note */}
          <p className="text-center text-sm text-slate-500 mt-10">
            Not sure?{" "}
            <Link
              href="/book"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              Book a free call
            </Link>{" "}
            and we&rsquo;ll tell you which plan fits.
          </p>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-divider" />

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  FINAL CTA                                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section ref={ctaRef} className="scroll-reveal relative px-6 py-32">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 mx-6 rounded-3xl bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.04] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Ready to automate your front office?
          </h2>
          <p className="text-lg text-slate-400 text-center max-w-xl mx-auto mt-4 leading-relaxed">
            30-minute call. We&rsquo;ll map your workflows and show you exactly what we&rsquo;d build.
          </p>
          <div className="mt-10">
            <MagneticButton
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-10 py-5 text-lg font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Call &rarr;
            </MagneticButton>
          </div>
          <p className="text-sm text-slate-600 mt-6">
            No commitment &middot; No sales pitch &middot; Just a clear plan
          </p>
        </div>
      </section>
    </div>
  );
}
