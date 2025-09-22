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

export default function Page() {
  return (
    <div className="min-h-screen text-slate-100 relative">
      <ProgressBar />
      
      {/* Background with animated effects */}
      <div className="fixed inset-0 z-0">
        {/* Photo background above aurora */}
        <div aria-hidden className="absolute inset-0 bg-hero opacity-70 pointer-events-none" />
        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/70" />
        {/* Aurora beam sweep */}
        <div aria-hidden className="absolute inset-0 bg-aurora-beam-home pointer-events-none" />
        {/* Animated orbs */}
        <AnimatedHeroBg />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>
      
      {/* Clean content structure */}
      <div className="relative z-10">
        <Hero />
        <TechnologyCapabilities />
        <ServicesPreview />
        <FinalCTA />
      </div>
      
      <StickyBar />
      <BackToTop />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 sm:px-8 pt-24 sm:pt-32 md:pt-40 pb-20">
      <div className="mx-auto max-w-7xl">
        {/* Brand Logo - Clean and Professional */}
        <div className="text-center mb-12 animate-fade-in">
          {/* New Elevair Logo */}
          <div className="inline-flex items-center justify-center mb-8 group">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-3xl animate-pulse-glow" />
              
              {/* Logo container */}
              <div className="relative flex items-center gap-3 transform transition-transform group-hover:scale-105">
                {/* Icon part */}
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/40 animate-pulse-slow flex items-center justify-center">
                  {/* Four-pointed star icon matching the logo */}
                  <svg 
                    viewBox="0 0 100 100" 
                    fill="currentColor" 
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-slate-900"
                  >
                    <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                  </svg>
                </div>
                
                {/* Text part */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 tracking-wide">
                  Elevair
                </div>
              </div>
            </div>
          </div>
          
          {/* Tagline with enhanced visibility */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 drop-shadow-lg">
            AI That Converts Visitors Into Customers
          </p>
          
          {/* Value prop with beta badge */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto drop-shadow-md">
            Intelligent automation that handles inquiries, books appointments, and follows up automatically. 
            <span className="inline-block ml-2 text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full font-semibold animate-pulse border border-cyan-400/30">
              BETA ACCESS
            </span>
          </p>
        </div>

        {/* CTAs with glow effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-10 py-5 text-lg font-bold text-slate-900 hover:from-cyan-300 hover:to-cyan-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 shadow-2xl shadow-cyan-500/30 transition-all transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl animate-pulse-glow" />
            <span className="relative flex items-center gap-2">
              Join Beta Program
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-10 py-5 text-lg font-medium text-slate-100 hover:bg-white/10 hover:border-cyan-400/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 transition-all"
          >
            See Technology
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust badges with subtle glow */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span>Early Access</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Clock className="h-4 w-4 text-cyan-400" />
            <span>Setup in Days</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <TrendingUp className="h-4 w-4 text-cyan-400" />
            <span>No Contracts</span>
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
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <svg viewBox="0 0 100 100" fill="currentColor" className="h-6 w-6">
                  <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Receptionist</h3>
              <p className="text-slate-400 text-sm mb-4">
                Answers inquiries, books appointments, and qualifies leads 24/7
              </p>
              <Link href="/services" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
              <p className="text-slate-400 text-sm mb-4">
                Self-booking, reminders, and follow-ups that reduce no-shows
              </p>
              <Link href="/services" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lead Automation</h3>
              <p className="text-slate-400 text-sm mb-4">
                Instant responses, smart follow-ups, and pipeline management
              </p>
              <Link href="/services" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                Learn more →
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

