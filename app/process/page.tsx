import Link from "next/link";
import { ArrowRight, Workflow, Bot, Mail, Calendar } from "lucide-react";

export const metadata = {
  title: "Process - Elevair",
  description: "Our 4-step process: Audit, Build, Train, Support. 14-30 day timeline.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Process
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            4 simple steps. 14-30 day timeline. More booked calls guaranteed.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-6 p-8 border border-white/10 rounded-2xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{step.desc}</p>
                <p className="text-sm text-slate-400">{step.timeline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Start your project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Audit",
    desc: "We test your lead flow, response speed, and follow‑up. You get a Loom + Notion roadmap with specific recommendations.",
    timeline: "Week 1: 2-3 days",
    icon: <Workflow className="h-5 w-5" />
  },
  {
    title: "Build",
    desc: "We install forms, CRM, automations, and outreach systems. Clean and reversible implementation.",
    timeline: "Week 2-3: 7-10 days",
    icon: <Bot className="h-5 w-5" />
  },
  {
    title: "Train",
    desc: "Short Looms + one‑pager SOPs. Your team actually uses the system we build.",
    timeline: "Week 3: 2-3 days",
    icon: <Mail className="h-5 w-5" />
  },
  {
    title: "Support",
    desc: "2–4 weeks of tweaks and optimization. Then light retainer if you want continued support.",
    timeline: "Week 4-6: Ongoing",
    icon: <Calendar className="h-5 w-5" />
  }
];