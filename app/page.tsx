import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedHeroBg from "../components/AnimatedHeroBg";
import StickyBar from "../components/StickyBar";
import BackToTop from "../components/BackToTop";
import ProgressBar from "../components/ProgressBar";
import MetricCard from "../components/MetricCard";
import ImplementationTimeline from "../components/ImplementationTimeline";
import SectionReveal from "../components/SectionReveal";

export default function Page() {
  return (
    <div className="min-h-screen text-slate-100 relative">
      <ProgressBar />
      {/* Page photo background (sits above global aurora, below content) */}
      <div aria-hidden className="absolute inset-0 z-0 bg-hero opacity-50 pointer-events-none" />
      <AnimatedHeroBg />
      <Hero />
      <ResultsPreview />
      <ProcessOverview />
      <StickyBar />
      <BackToTop />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 section-spacing">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 text-center">
        {/* Brand wordmark - smaller, less prominent */}
        <div aria-hidden="true" className="mb-6">
          <span
            className="inline-block font-bold tracking-wide text-spectral text-4xl sm:text-5xl md:text-6xl opacity-75"
            title="Elevair"
          >
            Elevair
          </span>
        </div>

        {/* Stronger, results-focused headline */}
        <h1 className="text-display mb-6">
          Stop hiring. <span className="text-cyan-300">Start converting.</span>
        </h1>

        {/* More specific subhead */}
        <p className="text-subhead text-slate-300 max-w-3xl mx-auto mb-8">
          Get measurable lift in qualified leads within 30 days. We build the systems, you see the results.
        </p>

        {/* Single primary CTA */}
        <div className="mb-6">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-xl font-semibold text-slate-900 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-105"
          >
            Book Free Strategy Call
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>

        {/* Stronger proof line */}
        <p className="text-supporting">
          30-day results guarantee. If we can't show measurable improvement, we refund 50% of the project fee.
        </p>
      </div>
    </section>
  );
}

function ResultsPreview() {
  return (
    <section className="relative z-10 section-spacing-sm bg-slate-900/50">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Typical Results for B2B Service Businesses</h2>
            <p className="text-subhead text-slate-300 max-w-2xl mx-auto">
              Real improvements our clients see within 30 days of implementation
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <MetricCard 
              before="2.1%" 
              after="8.3%" 
              metric="Lead Conversion Rate"
              timeframe="within 30 days"
            />
            <MetricCard 
              before="$247" 
              after="$89" 
              metric="Cost Per Lead"
              timeframe="within 45 days"
            />
            <MetricCard 
              before="18 hrs" 
              after="4 min" 
              metric="Response Time"
              timeframe="immediate improvement"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-6 py-3 rounded-xl text-sm">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Results may vary. We only work with businesses we believe we can help.
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ProcessOverview() {
  return (
    <section className="relative z-10 section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionReveal>
          <ImplementationTimeline />
        </SectionReveal>
        
        <SectionReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/5 px-8 py-4 text-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all duration-200"
            >
              Start Your 30-Day Implementation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

