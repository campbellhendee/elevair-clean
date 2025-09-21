import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";

const revenueFont = IBM_Plex_Sans({ subsets: ["latin"], weight: "600", display: "swap" });
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Abstract image background with gradient fallback */}
      <div aria-hidden className="absolute inset-0 z-0 bg-hero pointer-events-none" />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-8 pt-40 pb-28 md:pt-56 md:pb-36">
      <div className="mx-auto max-w-4xl text-center">
        {/* Brand wordmark (glow only, no caret/typing) */}
        <div aria-hidden="true" className="mb-3">
          <span
            className="inline-block font-extrabold tracking-tight text-spectral glow-cyan text-7xl sm:text-8xl md:text-9xl"
            title="Elevair"
          >
            Elevair
          </span>
        </div>

        {/* Accessible H1 */}
        <h1 className="mt-2 font-extrabold tracking-tight leading-tight text-5xl sm:text-6xl md:text-7xl">
          We don’t scale teams. <span className={`${revenueFont.className} text-cyan-300`}>We scale revenue.</span>
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
          Details are boring. AI thrives on them. Let it work while you scale
        </p>

        {/* CTAs (equal width on mobile) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-slate-900 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-10 py-5 text-xl font-medium text-slate-100 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
          >
            See How It Works
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Proof line */}
        <p className="mt-3 text-slate-400 text-sm">
          Simple, reversible systems. If we can’t point to revenue impact, we won’t sell it to you.
        </p>
      </div>
    </section>
  );
}

