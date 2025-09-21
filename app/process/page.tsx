import CTAButton from "../../components/CTAButton";

export const metadata = {
  title: "Process — Elevair",
  description: "Our simple process: discover & plan, build & install, train & launch, optimize & grow. Practical AI that books more calls without hiring.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Our Process: AI That Works for Your Business — End to End
          </h1>
          <p className="text-lg text-slate-300">
            We keep it simple: learn your workflow, install what helps, train your team, then keep improving.
          </p>
        </header>

        <div className="space-y-6">
          <section className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Step 1 — Discover & Plan</h2>
            <p className="text-slate-300">
              We analyze how your business actually runs—from first contact to job done—and pinpoint the few places where AI will save time or book more calls. You’ll get a short plan with clear “do this first” steps.
            </p>
          </section>
          <section className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Step 2 — Build & Install</h2>
            <p className="text-slate-300">
              We implement the right tools for you: AI sales rep, chatbot & intake, booking systems, follow‑ups, and CRM workflows. Everything is clean, fast, and reversible.
            </p>
          </section>
          <section className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Step 3 — Train & Launch</h2>
            <p className="text-slate-300">
              We hand over simple guides and short Looms so your team can use the new system right away—no technical background needed.
            </p>
          </section>
          <section className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Step 4 — Optimize & Grow</h2>
            <p className="text-slate-300">
              We track performance, improve what works, and expand AI into new areas (retention, reviews, upsells) as your business grows.
            </p>
          </section>
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
