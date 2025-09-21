import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Source_Sans_3 } from "next/font/google";

const proSubhead = Source_Sans_3({ subsets: ["latin"], display: "swap" });

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
        {/* Brand wordmark with typing + glow (visual only) */}
        <div aria-hidden="true" className="mb-2">
          <span
            className="inline-block font-extrabold tracking-tight text-spectral glow-cyan text-6xl sm:text-7xl md:text-8xl"
            title="Elevair"
          >
            Elevair
          </span>
        </div>

        {/* Accessible H1 */}
        <h1 className="mt-1 font-extrabold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
          We don’t scale teams — <span className="text-spectral glow-cyan">we scale revenue</span>.
        </h1>

        <p className={`${proSubhead.className} mt-5 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto`}>
          Details are boring. AI thrives on them. Let it work while you scale
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-10 py-5 text-xl font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-10 py-5 text-xl font-medium text-slate-100 hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See How It Works
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <p className="mt-6 text-base text-slate-400 max-w-2xl mx-auto">
          Simple, reversible systems. If we can’t point to revenue impact, we won’t sell it to you.
        </p>
      </div>
    </section>
  );
}
