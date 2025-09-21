import React from "react";

export default function TrustedBy() {
  const items = ["Operators", "B2C Services", "Local Lead Gen", "Owner‑led Teams"];
  return (
    <section aria-label="Trusted by" className="px-8 py-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="text-xs uppercase tracking-wider text-slate-400">Trusted by</div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {items.map((t) => (
            <span key={t} className="rounded-xl border border-white/10 bg-white/[.02] px-3 py-1.5 text-slate-300 text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
