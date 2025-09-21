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
        className="relative mx-auto max-w-5xl px-6 py-16"
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Process: AI That Works for Your Business — End to End
          </h1>
          <p className="text-lg text-slate-300">
            We keep it simple: learn your workflow, install what helps, train your team, then keep improving.
          </p>
        </header>

        <div className="relative mt-6">
          <div aria-hidden className="absolute inset-0 -z-10 bg-process" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <StepCard key={s.title} icon={s.icon} title={s.title}>
                {s.desc}
              </StepCard>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton href="/book" placement="section" variant="primary">
              Book a Free 30‑min Teardown
            </CTAButton>
            <CTAButton href="/contact" placement="section" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>

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
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 h-full hover:border-white/20 transition-colors">
      {/* subtle top accent */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />

      <div className="flex items-start gap-4">
        {/* Consistent icon circle (works for SVGs or emojis) */}
        <div
          className="shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-cyan-400/10 text-cyan-300"
          aria-hidden
        >
          <span className="flex items-center justify-center text-[18px] leading-none">{icon}</span>
        </div>

        <div className="flex-1">
          <h2 className="text-base sm:text-lg font-semibold mb-1">{title}</h2>
          <p className="text-slate-300 text-base leading-relaxed">{children}</p>
        </div>
      </div>
    </section>
  );
}
