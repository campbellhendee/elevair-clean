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
/*  Interactive mesh gradient canvas — responds to mouse movement      */
/* ------------------------------------------------------------------ */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Nodes that form the mesh
    const nodes: { x: number; y: number; vx: number; vy: number; baseX: number; baseY: number }[] = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      nodes.push({
        x, y, baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Move nodes toward mouse influence
      const mx = mouse.current.x * w;
      const my = mouse.current.y * h;

      for (const n of nodes) {
        // Drift
        n.x += n.vx;
        n.y += n.vy;

        // Mouse attraction (subtle)
        const dx = mx - n.x;
        const dy = my - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          n.x += dx * 0.002;
          n.y += dy * 0.002;
        }

        // Soft bounds
        if (n.x < -50) n.vx = Math.abs(n.vx);
        if (n.x > w + 50) n.vx = -Math.abs(n.vx);
        if (n.y < -50) n.vy = Math.abs(n.vy);
        if (n.y > h + 50) n.vy = -Math.abs(n.vy);
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const alpha = (1 - dist / 200) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.25)";
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  SectionReveal — IntersectionObserver entrance animation            */
/* ------------------------------------------------------------------ */
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
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
    text: "Done! You're booked for tomorrow at 2:00 PM. You'll receive a confirmation text shortly. ✓",
    time: "2:42 PM",
  },
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

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* ────────────────────────────────────────────────────────────── */}
      {/*  HERO                                                         */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-12 text-center overflow-hidden">
        {/* Interactive mesh canvas */}
        <HeroCanvas />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-indigo-500/[0.045] blur-[140px]" />

        {/* Pill badge */}
        <div
          className="hero-badge animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
            Now Accepting Clients
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-headline animate-fade-up font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 max-w-5xl"
          style={{ animationDelay: "0.3s" }}
        >
          AI That Works
          <br />
          <span
            className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-opacity duration-400"
            style={{ opacity: fadingIn ? 1 : 0 }}
          >
            {ROTATING_PHRASES[phraseIndex]}
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-sub animate-fade-up text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          AI that answers every call, books every appointment, and follows up with every lead. Automatically.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-10"
          style={{ animationDelay: "0.7s" }}
        >
          <Link
            href="/onboarding.html"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/[0.1] text-white rounded-full px-8 py-4 font-medium hover:bg-white/[0.03] hover:border-white/[0.15] transition-all duration-300"
          >
            See How It Works
          </Link>
        </div>

        {/* Trust signals */}
        <div
          className="hero-trust animate-fade-up flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-slate-500 mb-16"
          style={{ animationDelay: "0.9s" }}
        >
          <span>3-second response time</span>
          <span className="hidden sm:block h-4 w-px bg-white/[0.08]" />
          <span>Live in under a week</span>
          <span className="hidden sm:block h-4 w-px bg-white/[0.08]" />
          <span>No long-term contracts</span>
        </div>

        {/* Chat mockup */}
        <div
          className="hero-mockup animate-fade-up w-full max-w-lg mx-auto"
          style={{ animationDelay: "1.1s" }}
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
                {CHAT_MESSAGES.map((msg, i) => (
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

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  STATS BAR                                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="bg-white/[0.02] border-y border-white/[0.06] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "< 3s", label: "Response time" },
                { value: "24/7", label: "Availability" },
                { value: "0", label: "Missed inquiries" },
                { value: "48hrs", label: "Time to go live" },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="font-mono text-3xl md:text-4xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  WHAT ELEVAIR DOES                                            */}
      {/* ────────────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="px-6 py-28">
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
              <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
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
              </div>

              {/* Card 2 — Smart Scheduling */}
              <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
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
              </div>

              {/* Card 3 — Lead Automation */}
              <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-8 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
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
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  HOW IT WORKS — Process Timeline                              */}
      {/* ────────────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="px-6 py-28">
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
              <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-indigo-500/20" />

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
                    className="relative text-left md:text-center pl-16 md:pl-0"
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
      </SectionReveal>

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  PRICING PREVIEW                                              */}
      {/* ────────────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="px-6 py-28">
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
                <div
                  key={plan.name}
                  className={`relative bg-white/[0.03] backdrop-blur-xl border rounded-[20px] p-8 transition-all duration-300 ${
                    plan.featured
                      ? "border-indigo-500/30 scale-[1.02] md:scale-105"
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
                    href="/onboarding.html"
                    className={`block w-full text-center rounded-full py-3.5 font-semibold text-sm transition-all duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
                        : "border border-white/[0.1] text-white hover:bg-white/[0.03] hover:border-white/[0.15]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            {/* Sub-note */}
            <p className="text-center text-sm text-slate-500 mt-10">
              Not sure?{" "}
              <Link
                href="/onboarding.html"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
              >
                Get started free
              </Link>{" "}
              and we&rsquo;ll tell you which plan fits.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* ────────────────────────────────────────────────────────────── */}
      {/*  FINAL CTA                                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="relative px-6 py-32">
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
              <Link
                href="/onboarding.html"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-10 py-5 text-lg font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started &rarr;
              </Link>
            </div>
            <p className="text-sm text-slate-600 mt-6">
              No commitment &middot; No sales pitch &middot; Just a clear plan
            </p>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}
