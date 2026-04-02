import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$497",
    description: "Perfect for small businesses ready to stop missing leads.",
    featured: false,
    features: [
      "1 AI channel (chat or SMS)",
      "Up to 500 conversations/mo",
      "Calendar integration",
      "Email support",
      "Setup in 48 hours",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    description:
      "Full-stack automation for teams serious about converting every lead.",
    featured: true,
    badge: "Most Popular",
    features: [
      "All channels (chat, SMS, email)",
      "Unlimited conversations",
      "CRM integration",
      "Smart follow-up sequences",
      "Priority support",
      "Weekly performance report",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    description: "Enterprise-grade AI for multi-location businesses.",
    featured: false,
    features: [
      "Everything in Growth",
      "Custom AI training",
      "Multi-location support",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-5 h-px bg-indigo-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-400">
              Pricing
            </span>
            <span className="w-5 h-px bg-indigo-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            No setup fees. No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${
                plan.featured
                  ? "relative border-indigo-500/30"
                  : "border-white/[0.06]"
              } bg-white/[0.03] backdrop-blur-xl border rounded-[20px] p-8 flex flex-col`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <h2 className="font-heading text-lg font-bold text-white">
                {plan.name}
              </h2>
              <p className="font-heading text-4xl font-bold text-white mt-4">
                {plan.price}
                <span className="text-base font-normal text-slate-500">
                  /mo
                </span>
              </p>
              <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
              <div className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-indigo-400 text-sm mt-0.5">
                      &#10003;
                    </span>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
              {plan.featured ? (
                <Link
                  href="/book"
                  className="mt-8 block text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-8 py-4 font-semibold hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all"
                >
                  Book a Free Call
                </Link>
              ) : (
                <Link
                  href="/book"
                  className="mt-8 block text-center border border-white/[0.1] rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.03] transition-all"
                >
                  Book a Free Call
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Below cards */}
      <div className="mt-12 text-center">
        <p className="text-slate-500">
          Not sure which plan? Book a free call and we&apos;ll scope it
          together.
        </p>
        <Link
          href="/book"
          className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          Book a Call &rarr;
        </Link>
      </div>

      {/* Guarantee */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500/[0.06] to-purple-500/[0.03] border border-indigo-500/[0.12] rounded-[20px] p-10 text-center">
            <h3 className="font-heading text-xl font-bold text-white">
              30-Day Results Guarantee
            </h3>
            <p className="text-slate-400 mt-4 leading-relaxed">
              If you don&apos;t see measurable improvements within 30 days,
              we&apos;ll refund 50% of your setup fee. We&apos;re that confident
              in what we build.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center">
        <Link
          href="/book"
          className="text-sm text-slate-500 hover:text-white transition-colors"
        >
          Book a Free Call &rarr;
        </Link>
      </section>
    </main>
  );
}
