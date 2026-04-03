import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "FAQ — Elevair",
  description: "Common questions about Elevair's AI automation for businesses.",
};

const faqs = [
  { q: "How quickly can we get started?", a: "Most systems are live within 1-2 weeks of our first call." },
  { q: "Do I need to change my current tools?", a: "No. We integrate with your existing CRM, calendar, phone system, and email." },
  { q: "What does it cost?", a: "Plans start at $497/month. No setup fees, no contracts. Book a call and we'll scope exactly what you need." },
  { q: "What if the AI says something wrong?", a: "We train it specifically on your business and test extensively before launch. You approve everything. We monitor it continuously." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. Monthly retainers can be cancelled with 30 days notice." },
  { q: "How much involvement does my team need?", a: "Minimal. We need about 2-3 hours total from you during setup — a kickoff call and a review before launch. We handle the rest." },
  { q: "What industries do you work with?", a: "Any local service business — plumbers, dentists, gyms, restaurants, law firms, landscapers, and more. If you have customers contacting you, we can automate that." },
  { q: "What happens after launch?", a: "We monitor your system, optimize it monthly, and add new capabilities as your business grows. Your AI gets smarter over time." },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">FAQ</span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
            Common Questions
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mt-6">
            Everything you need to know before getting started.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-white/[0.03] border border-white/[0.06] rounded-xl">
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between">
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <span className="text-slate-500 text-xl transition-transform duration-200 group-open:rotate-45 flex-shrink-0">+</span>
              </summary>
              <div className="px-6 pb-5 text-slate-400 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 mb-6">Still have questions?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
