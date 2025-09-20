"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300">
            Everything you need to know about working with Elevair.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition"
              >
                <h3 className="font-semibold pr-4">{faq.question}</h3>
                {openItems.has(index) ? (
                  <Minus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                )}
              </button>
              {openItems.has(index) && (
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Get in touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How quickly can you get started?",
    answer: "We typically start within 1-2 weeks of our initial call. The audit phase begins immediately, and we'll have your roadmap within 2-3 days."
  },
  {
    question: "What if the system doesn't work for us?",
    answer: "Everything we build is reversible. If you're not happy with the results after 30 days, we'll help you revert to your previous setup and refund 50% of the project fee."
  },
  {
    question: "Do you work with our existing tools?",
    answer: "Yes, we integrate with your current CRM, email platform, and other tools. We don't replace what's working—we make it work better."
  },
  {
    question: "How much time does our team need to invest?",
    answer: "Minimal. We need about 2-3 hours total from your team during the audit phase, then 1-2 hours for training. We handle everything else."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with B2B service businesses, SaaS companies, consultants, and agencies. If you sell high-value services and need more qualified leads, we can help."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No contracts. The project fee covers everything outlined in your roadmap. The optional retainer is month-to-month and can be canceled anytime."
  },
  {
    question: "How do you measure success?",
    answer: "We track qualified leads, response times, conversion rates, and ultimately revenue impact. You'll get a monthly report showing exactly what's working."
  },
  {
    question: "What happens if we need changes after launch?",
    answer: "The first 4 weeks include unlimited tweaks and optimization. After that, small changes are included in the optional retainer, or we can quote larger modifications separately."
  }
];