import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto flex items-center justify-center mb-6">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-white">
          Thanks — one more step
        </h1>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Your details are in. Complete the quick onboarding so we can build a system tailored to your business.
        </p>
        <Link
          href="/onboarding.html"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
        >
          Start Onboarding <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
