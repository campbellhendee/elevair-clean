"use client";
import { useEffect } from 'react';
import CTAButton from '../../components/CTAButton';
import { track } from '../../lib/analytics';

export default function ThanksPage() {
  useEffect(() => { track('form_submit', { source: 'tally' }); }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thanks — last step: book your teardown</h1>
        <p className="text-slate-300 mb-6">Your details are in. Grab a time now so we can prep a mini plan for your exact funnel.</p>
        <CTAButton href="/book" placement="thanks">Book Now (30 mins)</CTAButton>
      </div>
    </main>
  );
}
