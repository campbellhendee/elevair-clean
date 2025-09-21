import CTAButton from "../../components/CTAButton";
import { Workflow, Wrench, GraduationCap, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

export const metadata = {
  title: "Process — Elevair",
  description:
    "Our simple process: discover & plan, build & install, train & launch, optimize & grow. Practical AI that books more calls without hiring.",
};

export default function ProcessPage() {
  const steps: StepItem[] = [
    {
      title: "Step 1 — Discover & Plan",
      desc:
        "We analyze how your business actually runs—from first contact to job done—and pinpoint the few places where AI will save time or book more calls. You’ll get a short plan with clear “do this first” steps.",
      icon: <Workflow className="h-5 w-5" />,
    },
    {
      title: "Step 2 — Build & Install",
      desc:
        "We implement the right tools for you: AI sales rep, chatbot & intake, booking systems, follow‑ups, and CRM workflows. Everything is clean, fast, and reversible.",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "Step 3 — Train & Launch",
      desc:
        "We hand over simple guides and short Looms so your team can use the new system right away—no technical background needed.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Step 4 — Optimize & Grow",
      desc:
        "We track performance, improve what works, and expand AI into new areas (retention, reviews, upsells) as your business grows.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section
        className="relative mx-auto max-w-3xl px-6 py-16 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(34,211,238,0.04),transparent)]"
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Process: AI That Works for Your Business — End to End
          </h1>
          <p className="text-lg text-slate-300">
            We keep it simple: learn your workflow, install what helps, train your team, then keep improving.
          </p>
        </header>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical timeline (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-cyan-400/15"
          />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <StepCard key={s.title} index={i + 1} icon={s.icon} title={s.title}>
                {s.desc}
              </StepCard>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <CTAButton href="/book" placement="section" variant="primary">
            Book a Free 30‑min Teardown
          </CTAButton>
          <CTAButton href="/contact" placement="section" variant="secondary">
            Contact Us
          </CTAButton>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          Typical setup: 14–30 days, then light ongoing support.
        </p>
      </section>
    </div>
  );
}

type StepItem = {
  title: string;
  desc: string;
  icon: ReactNode;
};

function StepCard({
  index,
  icon,
  title,
  children,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      {/* Timeline node (desktop) */}
      <div
        aria-hidden
        className="hidden md:block absolute left-[22px] top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.18)]"
      />

      <div
        className="rounded-2xl bg-white/5 p-5 md:pl-14 border border-white/10 hover:border-white/20 transition-colors"
      >
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-cyan-400/10 text-cyan-300">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-300 text-xs font-semibold">
                {index}
              </span>
              <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">{children}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
