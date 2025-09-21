import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Big wordmark with gradient + glow + typing */}
        <h1 className="mb-3">
          <span
            className="
              inline-block w-[7ch] overflow-hidden whitespace-nowrap
              border-r-2 border-cyan-300
              animate-typing-7
              font-extrabold tracking-tight
              text-6xl sm:text-7xl md:text-8xl
              bg-gradient-to-r from-cyan-300 via-cyan-200 to-white
              text-transparent bg-clip-text
              glow-cyan
            "
            aria-label="Elevair"
            title="Elevair"
          >
            Elevair
          </span>
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
          Two-person strike team. Fast installs. More booked calls in 14–30 days.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a Free 30‑min Teardown
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-lg font-medium text-slate-100 hover:bg-white/5 transition"
          >
            See How It Works
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
