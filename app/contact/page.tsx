"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { getUTMSearch } from '../../lib/analytics';

export default function ContactPage() {
  const support = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? 'growth@elevair.org';
  const base = process.env.NEXT_PUBLIC_TALLY_URL ?? '';
  const qs = getUTMSearch();
  const src = useMemo(() => {
    if (!qs) return base;
    return base.includes('?') ? `${base}&${qs.slice(1)}` : `${base}${qs}`;
  }, [base, qs]);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Prefer to share details first?</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Tell us how leads come in and where they stall. We’ll reply within 24 hours with quick wins + next steps.
          </p>
          <p className="text-slate-400 mt-3">Having trouble? Email us at <a href={`mailto:${support}`} className="underline">{support}</a> or <Link href="/book" className="underline">book directly</Link>.</p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white shadow-lg">
          <iframe
            src={src}
            width="100%"
            height={650}
            frameBorder={0}
            title="Contact form"
            className="w-full"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">Note: after submitting you’ll be redirected to schedule — keep your tab open.</p>
      </div>
    </main>
  );
}