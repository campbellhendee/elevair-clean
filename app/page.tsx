"use client";

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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          We don't scale teams,{" "}
          <span className="text-cyan-400">we scale revenue</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
          Two-person strike team. Fast installs. More booked calls in 14–30 days.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a call
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-lg font-medium text-slate-100 hover:bg-white/5 transition"
          >
            Our process
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
