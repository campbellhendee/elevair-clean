import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing - Elevair",
  description: "Simple, transparent pricing. One project fee, optional retainer.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Simple Pricing
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            One project fee, no surprises. Optional retainer for ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border border-white/10 rounded-2xl p-8 relative">
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <p className="text-slate-400 text-sm">{pkg.billing}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className={`block w-full text-center py-3 px-6 rounded-2xl font-semibold transition ${
                  pkg.popular
                    ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Questions about pricing or need a custom solution?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const packages = [
  {
    name: "Project",
    price: "$8,500",
    billing: "One-time project fee",
    popular: true,
    cta: "Book a call",
    features: [
      "Complete audit & roadmap",
      "System implementation (14-30 days)",
      "Team training & documentation",
      "4 weeks of tweaks & optimization",
      "ROI measurement & reporting",
      "Reversible if you change your mind"
    ]
  },
  {
    name: "Retainer",
    price: "$2,500/mo",
    billing: "Optional ongoing support",
    popular: false,
    cta: "Discuss retainer",
    features: [
      "Ongoing system optimization",
      "Monthly performance review",
      "New feature implementation",
      "Priority support & troubleshooting",
      "Strategy & planning sessions",
      "Cancel anytime"
    ]
  }
];