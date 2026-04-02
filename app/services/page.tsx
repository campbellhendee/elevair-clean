import Link from "next/link";

const services = [
  {
    icon: "\u{1F4DE}",
    title: "AI Receptionist",
    description:
      "Your business never misses an inquiry again. Our AI handles calls, chats, and emails 24/7 with natural, accurate responses trained specifically on your business.",
    features: [
      "Instant answers to calls, chats, and web forms",
      "Trained on your services, pricing, and FAQs",
      "Qualifies leads before they reach your team",
      "Integrates with your phone system and website",
      "Handles multiple conversations at once",
      "Works nights, weekends, and holidays",
    ],
  },
  {
    icon: "\u{1F4C5}",
    title: "Smart Scheduling",
    description:
      "Customers book themselves. Confirmations and reminders go out automatically. Your calendar fills up, no-shows drop, and nobody plays phone tag.",
    features: [
      "Self-service booking from any channel",
      "Automated text and email confirmations",
      "Smart reminders that cut no-shows by 40%+",
      "Syncs with Google Calendar and Outlook",
      "Handles rescheduling and cancellations",
      "Time zone aware",
    ],
  },
  {
    icon: "\u26A1",
    title: "Lead Automation",
    description:
      "Every lead gets an instant, personal response. Smart follow-up sequences keep working until the lead converts \u2014 or tells you to stop.",
    features: [
      "Sub-60-second response to every inquiry",
      "Multi-touch follow-ups via email and SMS",
      "Intelligent lead scoring and qualification",
      "CRM integration (HubSpot, Salesforce, etc.)",
      "Real-time alerts for high-intent leads",
      "Full attribution and conversion tracking",
    ],
  },
];

const steps = [
  {
    num: "1",
    title: "Discovery",
    description:
      "A 30-minute call to understand your business, map your workflows, and scope the build.",
  },
  {
    num: "2",
    title: "Build & Launch",
    description:
      "We build your system, integrate your tools, and go live \u2014 typically within 48 hours.",
  },
  {
    num: "3",
    title: "Optimize",
    description:
      "Monthly performance reviews, continuous tuning, and new capabilities as your business grows.",
  },
];

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Most systems are live within 48 hours of our first call. Complex integrations may take 1\u20132 weeks.",
  },
  {
    q: "Do I need to change my current tools?",
    a: "No. We integrate with what you already use \u2014 your CRM, calendar, phone system, and email.",
  },
  {
    q: "What does it cost?",
    a: "Plans start at $497/mo. Book a call and we\u2019ll scope exactly what you need.",
  },
  {
    q: "What if the AI says something wrong?",
    a: "We train it specifically on your business and test extensively. You approve everything before launch. And we monitor it continuously.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Cancel with 30 days notice.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
              What We Build
            </span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            AI That Handles Your Front Office
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            From first inquiry to booked appointment &mdash; three systems that
            work together so nothing falls through the cracks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-[20px] p-10 md:p-14"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed mt-4 max-w-3xl">
                {service.description}
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
              The Process
            </span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center">
            Live in 48 Hours
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto flex items-center justify-center text-white font-bold font-heading text-lg">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-xl mb-3"
              >
                <summary className="cursor-pointer px-6 py-5 flex items-center justify-between">
                  <span className="font-medium text-white">{faq.q}</span>
                  <span className="ml-4 text-slate-500 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
          Ready to automate your front office?
        </h2>
        <Link
          href="/onboarding.html"
          className="mt-8 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
