"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { getUTMSearch } from '../../lib/analytics';
import FallbackForm from './fallback-form';

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? 'growth@elevair.org';
  const base = process.env.NEXT_PUBLIC_TALLY_URL ?? '';
  const qs = getUTMSearch();
  const url = useMemo(() => {
    if (!qs) return base;
    return base.includes('?') ? `${base}&${qs.slice(1)}` : `${base}${qs}`;
  }, [base, qs]);
  const hasTally = base.trim().length > 0;
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-14 md:py-20 pb-28">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Contact us</h1>
        <p className="text-center text-slate-300 mt-3">
          Prefer email? Reach out at{' '}
          <a className="underline" href={`mailto:${email}`}>{email ? email : 'Growth@Elevair.org'}</a>
          {' '}or go ahead and <Link className="underline" href="/book">book a call</Link> now.
        </p>

        {hasTally && (
          <>
            <div className="mt-10 md:mt-12 rounded-2xl border border-white/10 bg-white/[.02] overflow-hidden">
              <iframe
                data-tally-src={url}
                width="100%"
                height="720"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact form"
                className="w-full block"
              />
            </div>
            <script async src="https://tally.so/widgets/embed.js"></script>
          </>
        )}

        <div className={hasTally ? 'mt-10 md:mt-12' : 'mt-8'}>
          <h2 className="text-xl font-semibold">
            {hasTally ? 'Having trouble with the form?' : 'Quick contact form'}
          </h2>
          <p className="text-slate-300 mt-2">
            {hasTally
              ? <>Email us or use the simple form below. Or <Link href="/book" className="underline">book a call</Link> now.</>
              : <>No problem — use the simple form below. Or <Link href="/book" className="underline">book a call</Link> now.</>}
          </p>
          <FallbackForm email={email} />
        </div>
      </div>
    </main>
  );
}