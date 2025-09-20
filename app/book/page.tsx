"use client";
import { useEffect, useMemo } from 'react';
import Script from 'next/script';
import { brandColorNoHash, getUTMSearch, track } from '../../lib/analytics';

export default function BookPage() {
  const base = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '';
  const color = brandColorNoHash();
  const qs = getUTMSearch();
  const url = useMemo(() => {
    const q = `?hide_gdpr_banner=1&primary_color=${encodeURIComponent(color)}`;
    const utm = qs ? `&${qs.slice(1)}` : '';
    return `${base}${q}${utm}`;
  }, [base, color, qs]);
  const hasCalendly = base.trim().length > 0;

  useEffect(() => {
    function onMsg(e: MessageEvent) {
      const ev = (e?.data as any)?.event;
      if (ev === 'calendly.event_scheduled') {
        track('cal_scheduled', { source: 'calendly' });
      }
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Book your free consultation</h1>
        <p className="text-center text-slate-300 mt-2">
          Pick a time. We’ll review your website, forms, follow-ups, and response speed.
          You leave with a short plan and quick wins.
        </p>
        {hasCalendly ? (
          <>
            <div className="calendly-inline-widget mt-8" data-url={url} style={{ minWidth: '320px', height: '740px' }} />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
            <p className="mt-3 text-center text-slate-400 text-sm">
              Trouble loading Calendly?{' '}
              <a className="underline" href={url} target="_blank" rel="noopener noreferrer">Open the booking page</a>.
            </p>
          </>
        ) : (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.02] p-6 text-center">
            <p className="text-slate-300">
              Our booking calendar is temporarily unavailable. Please email{' '}
              <a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'growth@elevair.org'}`}>
                {process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'growth@elevair.org'}
              </a>{' '}
              or use the <a className="underline" href="/contact">contact form</a>.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}