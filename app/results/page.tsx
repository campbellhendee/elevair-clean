import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why Elevair Works — The Numbers Behind It",
  description: "Most businesses lose 40-60% of their leads after hours. See the data behind why AI automation changes that.",
};

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">The Case for AI</span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Most Businesses Lose 40–60% of Their Leads After Hours
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            Not because the product is bad. Because no one answered fast enough.
          </p>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { number: "48 hrs", label: "Average time small businesses take to respond to a web enquiry", source: "Harvard Business Review" },
            { number: "78%", label: "Of customers buy from the first business that responds", source: "Lead Connect Study" },
            { number: "60%", label: "Of calls to small businesses go unanswered", source: "BIA Advisory Services" },
          ].map((stat) => (
            <div key={stat.number} className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-8 text-center">
              <div className="font-mono text-4xl font-bold text-cyan-400">{stat.number}</div>
              <p className="text-slate-400 mt-3 leading-relaxed text-sm">{stat.label}</p>
              <p className="text-slate-600 text-xs mt-2 italic">{stat.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Changes When Elevair Is Running
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] border border-red-500/10 rounded-[20px] p-8">
              <h3 className="font-heading text-lg font-bold text-red-400 mb-6">Without Elevair</h3>
              <ul className="space-y-4">
                {[
                  "Leads go cold overnight and on weekends",
                  "Manual follow-up that never happens consistently",
                  "Owner answering the same questions 20 times a day",
                  "Missed calls with no callback system",
                  "Competitors who respond faster win the job",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="text-red-400/60 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-emerald-500/10 rounded-[20px] p-8">
              <h3 className="font-heading text-lg font-bold text-emerald-400 mb-6">With Elevair</h3>
              <ul className="space-y-4">
                {[
                  "Every enquiry gets a response in under 3 seconds",
                  "Follow-up sequences run automatically until the lead converts",
                  "AI handles FAQs so the owner focuses on real conversations",
                  "Every missed call captured and followed up via SMS",
                  "You are always the first to respond — guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How the Pipeline Works */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Under the Hood
          </h2>
          <p className="text-slate-400 text-center mb-12">Three steps that happen automatically, every time</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Enquiry Received",
                desc: "A customer submits a form, sends an SMS, or starts a chat. The AI reads it instantly, identifies their intent, and pulls your business context — services, pricing, availability, and tone.",
              },
              {
                num: "2",
                title: "Response Generated",
                desc: "A personalised reply is crafted and sent in under 3 seconds. Trained specifically on your business. Not a template — an intelligent response that matches your voice.",
              },
              {
                num: "3",
                title: "Action Taken",
                desc: "The appointment is booked, the lead is scored, your CRM is updated, and your team gets notified. You only see conversations that need a human.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto flex items-center justify-center text-white font-bold font-heading text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Note */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-10 text-center">
            <p className="text-slate-300 leading-relaxed">
              Elevair runs on <strong className="text-white">Claude AI by Anthropic</strong> — the same AI trusted by
              some of the world&apos;s largest companies. Every response is accurate, natural, and trained
              specifically on your business before it goes live.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            See Exactly What We&apos;d Build For You
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Free 30-minute strategy call. We&apos;ll map your current workflow, show you where leads are
            slipping through, and tell you what we&apos;d build — no obligation.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Book Your Free Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
