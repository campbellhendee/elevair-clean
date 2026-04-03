import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Process — Elevair",
  description: "How we build and deploy your AI automation system in 1-2 weeks.",
};

const steps = [
  {
    num: "01",
    title: "Discovery",
    duration: "30 minutes",
    desc: "We learn your business — services, customers, workflows, tools. We map where leads come in and where they fall through the cracks.",
  },
  {
    num: "02",
    title: "Build",
    duration: "5-7 days",
    desc: "We build your custom AI system, train it on your business, and integrate it with your existing tools. You review and approve before anything goes live.",
  },
  {
    num: "03",
    title: "Launch",
    duration: "Day 7-10",
    desc: "Your system goes live. We monitor it closely, fine-tune responses, and make sure everything runs smoothly from day one.",
  },
  {
    num: "04",
    title: "Optimize",
    duration: "Ongoing",
    desc: "Monthly performance reviews. We refine the AI, test new approaches, add features, and keep improving your results over time.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">The Process</span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            From first call to live system in under two weeks
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            No lengthy onboarding. No months of planning. We learn your business, build your AI, and go live — fast.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-8 md:p-10 flex gap-8 items-start">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-mono font-bold text-sm flex-shrink-0">
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 md:hidden">
                  <span className="font-mono text-sm font-bold text-indigo-400">{step.num}</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">{step.title}</h2>
                <span className="inline-block mt-2 font-mono text-xs tracking-wider uppercase text-indigo-400">{step.duration}</span>
                <p className="text-slate-400 leading-relaxed mt-3">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500/[0.06] to-purple-500/[0.03] border border-indigo-500/[0.12] rounded-[20px] p-8 md:p-10 text-center">
            <h3 className="font-heading text-xl font-bold text-white">Everything is reversible</h3>
            <p className="text-slate-400 mt-3 leading-relaxed">
              If you're not happy after 30 days, we'll revert your setup and refund 50% of the project fee. We're that confident in what we build.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Ready to get started?</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Book a 30-minute call. We'll map your workflows and tell you exactly what we'd build.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Book Your Free Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
