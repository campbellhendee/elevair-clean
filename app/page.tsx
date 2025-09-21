import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Soft radial cyan background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900 to-slate-950" />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-8 py-28 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 font-extrabold tracking-tight leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          We don’t scale teams,{" "}
          <span className="text-spectral glow-cyan">we scale revenue</span>
        </h1>

        <p className="mt-5 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
          Two-person strike team. Fast installs. More booked calls in 14–30 days.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a Free 30‑min Teardown
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-10 py-5 text-xl font-medium text-slate-100 hover:bg-white/5 transition"
          >
            See How It Works
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
