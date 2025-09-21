import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";

const revenueFont = IBM_Plex_Sans({ subsets: ["latin"], weight: "600", display: "swap" });
export default function Page() {
  return (
    <div className="min-h-screen text-slate-100 relative">
      {/* Page photo background (sits above global aurora, below content) */}
  <div aria-hidden className="absolute inset-0 z-0 bg-hero opacity-60 pointer-events-none" />
      {/* Extremely subtle ambient background drift on home page */}
      <div aria-hidden className="absolute inset-0 z-0 bg-aurora bg-aurora-subtle bg-aurora-tiny-drift pointer-events-none" />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 sm:px-8 pt-28 sm:pt-36 md:pt-56 pb-20 sm:pb-24 md:pb-36">
      {/* mobile responsive tweak: increase top/bottom padding at md+, tighter on small */}
      {/* mobile responsive tweak: constrain width and center content */}
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Brand wordmark (glow only, no caret/typing) */}
        {/* mobile responsive tweak: adjust spacing on small screens */}
        <div aria-hidden="true" className="mb-2 sm:mb-3">
          <span
            className="inline-block font-extrabold tracking-tight text-spectral glow-cyan text-7xl sm:text-8xl md:text-9xl"
            title="Elevair"
          >
            Elevair
          </span>
        </div>

        {/* Accessible H1 */}
        {/* mobile responsive tweak: responsive headline scaling */}
        <h1 className="mt-1 sm:mt-2 font-extrabold tracking-tight leading-tight text-3xl sm:text-5xl md:text-7xl">
          We don’t scale teams. <span className={`${revenueFont.className} text-cyan-300`}>We scale revenue.</span>
        </h1>

        {/* Subhead */}
        {/* mobile responsive tweak: responsive subhead scaling */}
        <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
          Details are boring. AI thrives on them. Let it work while you scale
        </p>

        {/* CTAs (equal width on mobile) */}
        {/* mobile responsive tweak: buttons full width on mobile, inline on desktop */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-slate-900 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-lg sm:text-xl font-medium text-slate-100 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
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

