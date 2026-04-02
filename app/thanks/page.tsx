"use client";
import { useEffect } from 'react';
import CTAButton from '../../components/CTAButton';
import { track } from '../../lib/analytics';

export default function ThanksPage() {
  useEffect(() => { track('form_submit', { source: 'tally' }); }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Thanks — last step: tell us about your business</h1>
        <p className="text-slate-300 mb-6">Your details are in. Complete the quick onboarding so we can prep a plan for your exact setup.</p>
  <CTAButton href="/onboarding.html" placement="thanks">Get Started</CTAButton>
      </div>
    </main>
  );
}
