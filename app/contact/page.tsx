"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { getUTMSearch } from '../../lib/analytics';
import FallbackForm from './fallback-form';

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? '';
  const base = process.env.NEXT_PUBLIC_TALLY_URL ?? '';
  const qs = getUTMSearch();
  const url = useMemo(() => {
    if (!qs) return base;
    return base.includes('?') ? `${base}&${qs.slice(1)}` : `${base}${qs}`;
  }, [base, qs]);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Contact us</h1>
        <p className="text-center text-slate-300 mt-2">
          Prefer email? Reach out at{' '}
          <a className="underline" href={`mailto:${email}`}>{email || 'support@example.com'}</a>
          {' '}or go ahead and <Link className="underline" href="/book">book a 30‑min teardown</Link> now.
        </p>
        <iframe
          data-tally-src={url}
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact form"
          className="mt-8"
        />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Having trouble with the form?</h2>
          <p className="text-slate-300 mt-1">Email us or use the simple form below. Or <Link href="/book" className="underline">book a 30‑min teardown</Link> now.</p>
          <FallbackForm email={email} />
        </div>
      </div>
    </main>
  );
}