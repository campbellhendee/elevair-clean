"use client";
import { useEffect, useMemo } from "react";
import Script from "next/script";
import { brandColorNoHash, getUTMSearch, track } from "../../lib/analytics";

export default function BookPage() {
  const base = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
  const color = brandColorNoHash();
  const qs = getUTMSearch();
  const url = useMemo(() => {
    const q = `?hide_gdpr_banner=1&primary_color=${encodeURIComponent(color)}`;
    const utm = qs ? `&${qs.slice(1)}` : '';
    return `${base}${q}${utm}`;
  }, [base, color, qs]);

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
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book your free teardown</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Pick a time (30 mins). We’ll review your website, forms, follow‑ups, and response speed. You leave with a short plan and quick wins.
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height: "740px" }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </div>
    </main>
  );
}