import CTAButton from "../../components/CTAButton";
import ProcessInteractive from "../../components/ProcessInteractive";
import HowToSchema from "../../components/HowToSchema";

export const metadata = {
  title: "Process — Elevair",
  description:
    "Our simple process: discover & plan, build & install, train & launch, optimize & grow. Practical AI that books more calls without hiring.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HowToSchema />
      <section className="container-section">
        <header className="page-header">
          <h1>Our Process: AI That Works for Your Business — End to End</h1>
          <p>We keep it simple: learn your workflow, install what helps, train your team, then keep improving.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Plain‑English handoff</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Fast, clean installs</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300">Reversible by design</span>
          </div>
        </header>
      </section>

      {/* Interactive body */}
      <div className="container-section">
        <ProcessInteractive />
      </div>
    </div>
  );
}
