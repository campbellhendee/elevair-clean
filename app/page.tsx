"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle, Clock, Shield, TrendingUp, Bot, Gauge, Cpu } from "lucide-react";
import AnimatedHeroBg from "../components/AnimatedHeroBg";
import StickyBar from "../components/StickyBar";
import BackToTop from "../components/BackToTop";
import ProgressBar from "../components/ProgressBar";
import MetricCard from "../components/MetricCard";
import ImplementationTimeline from "../components/ImplementationTimeline";
import SectionReveal from "../components/SectionReveal";
import StatsTiles from "../components/StatsTiles";
import TrustedBy from "../components/TrustedBy";

export default function Page() {
  return (
    <div className="min-h-screen text-slate-100 relative">
      <ProgressBar />
      
      {/* Background with animated effects */}
      <div className="fixed inset-0 z-0">
        {/* Photo background above aurora */}
        <div aria-hidden className="absolute inset-0 bg-hero opacity-90 pointer-events-none" />
        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/70" />
        {/* Aurora beam sweep removed for cleaner look */}
        {/* <div aria-hidden className="absolute inset-0 bg-aurora-beam-home pointer-events-none" /> */}
        {/* Animated orbs */}
        <AnimatedHeroBg />
        {/* Animated grid overlay (very subtle) */}
        <div className="absolute inset-0 animated-grid opacity-[0.06]" aria-hidden />
        {/* Floating particles for life */}
        <FloatingParticles count={18} />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>
      
      {/* Clean content structure */}
      <div className="relative z-10">
        <Hero />
        <TechnologyCapabilities />
  <TrustedBy />
        <ServicesPreview />
        <FinalCTA />
      </div>
      
      <StickyBar />
      <BackToTop />
    </div>
  );
}

/* Minimal, local visual helpers to avoid new files */
function FloatingParticles({ count = 14 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/70 rounded-full animate-float-random"
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 37) % 100}%`,
            // @ts-ignore custom CSS var consumed by utility
            "--float-duration": `${16 + (i % 7)}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 md:pt-48 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Brand wordmark — animated gradient + glow (keeps header logo separate) */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="mb-6 leading-none">
            <span
              className="inline-block font-black tracking-tighter text-elevair-animated glow-cyan-strong text-8xl sm:text-9xl md:text-[12rem]"
              title="Elevair"
            >
              Elevair
            </span>
          </h1>
        </div>
        
        <div className="text-center mb-14">
          {/* Tagline with enhanced visibility */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            AI That Converts Visitors Into Customers
          </p>
          
          {/* Value prop with beta badge */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Intelligent automation that handles inquiries, books appointments, and follows up automatically.
            <span className="inline-flex items-center ml-3 text-sm bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-300 px-4 py-1.5 rounded-full font-medium border border-cyan-400/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" />
              BETA ACCESS
            </span>
          </p>
        </div>

        {/* CTAs with metallic shimmer primary */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-6 text-xl font-semibold btn-metallic backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01]"
          >
            Get Early Access
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/10 backdrop-blur-sm px-12 py-6 text-xl font-medium text-white hover:bg-white/5 hover:border-cyan-400/30 transition-all duration-300"
          >
            Explore Technology
            <ArrowRight className="h-6 w-6 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust badges - floating card style */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-8 backdrop-blur-sm bg-white/[0.02] rounded-2xl px-8 py-4 border border-white/10">
            {[{ icon: Shield, text: "Early Access" }, { icon: Clock, text: "Setup in Days" }, { icon: TrendingUp, text: "No Contracts" }].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <item.icon className="h-4 w-4 text-cyan-400" />
                <span className="text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your team is drowning in repetitive tasks
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Customers wait hours (or days) for responses</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Phone tag wastes everyone's time</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Good leads go cold from slow follow-up</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No-shows kill your calendar efficiency</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                AI handles it. You focus on growth.
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Instant responses to every inquiry</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Customers book themselves directly</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Automatic follow-ups that convert</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Smart reminders and confirmations</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function ResultsPreview() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-20 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Built for performance
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Powered by cutting-edge AI technology, designed for your success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard 
              before="Hours" 
              after="Seconds" 
              metric="AI Response Time"
              timeframe="powered by GPT-4"
            />
            <MetricCard 
              before="Manual" 
              after="24/7 AI" 
              metric="Availability"
              timeframe="never sleeps"
            />
            <MetricCard 
              before="Generic" 
              after="Custom" 
              metric="AI Training"
              timeframe="your business voice"
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function TechnologyCapabilities() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Technology that works while you sleep
          </p>
          <StatsTiles />
        </div>
      </section>
    </SectionReveal>
  );
}

function ServicesPreview() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Pick what you need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-8 hover:border-cyan-400/20 transition-all duration-500 card-hover-lift">
              {/* Hover gradient wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all duration-500" />
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="h-7 w-7">
                    <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">AI Receptionist</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-5">
                Answers inquiries, books appointments, and qualifies leads 24/7
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 font-medium group/link">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-8 hover:border-cyan-400/20 transition-all duration-500 card-hover-lift">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all duration-500" />
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400">
                  <Clock className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Smart Scheduling</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-5">
                Self-booking, reminders, and follow-ups that reduce no-shows
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 font-medium group/link">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-8 hover:border-cyan-400/20 transition-all duration-500 card-hover-lift">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all duration-500" />
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Lead Automation</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-5">
                Instant responses, smart follow-ups, and pipeline management
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 font-medium group/link">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 py-4 text-lg font-bold text-slate-900 hover:from-cyan-300 hover:to-cyan-400 shadow-xl shadow-cyan-500/20 transition-all transform hover:scale-105"
            >
              See All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function ProcessOverview() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            We handle everything
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            From setup to training, you're covered
          </p>
          <ImplementationTimeline />
          <div className="text-center mt-12">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              See the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function FinalCTA() {
  return (
    <SectionReveal>
      <section className="px-6 sm:px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to scale without hiring?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free strategy call. We'll show you exactly what we can automate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-10 py-5 text-lg font-bold text-slate-900 hover:from-cyan-300 hover:to-cyan-400 shadow-2xl shadow-cyan-500/30 transition-all transform hover:scale-105"
            >
              Book Your Free Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Beta program • Limited spots available • No setup fees
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}

