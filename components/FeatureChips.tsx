import { Zap, Workflow, Shield } from "lucide-react";

const items = [
  { icon: Zap, label: "Speed‑to‑lead < 5m" },
  { icon: Workflow, label: "5‑touch follow‑ups" },
  { icon: Shield, label: "Clean, reversible installs" },
];

export default function FeatureChips() {
  return (
    <section className="px-8 pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.02] px-3 py-1.5 text-slate-300 text-sm"
            >
              <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
