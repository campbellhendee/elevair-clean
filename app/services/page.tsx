import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Services - Elevair",
  description: "Two-person strike team. Fast installs. More booked calls in 14–30 days.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We build systems that respond instantly, log every lead, and book calls—no 30‑page decks.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.title} className="border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-400 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Book a call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Lead Capture & Response",
    desc: "Fast installs that respond instantly and log every lead.",
    bullets: [
      "Custom forms with instant notifications",
      "CRM integration and lead scoring",
      "Automated follow-up sequences",
      "Response time under 5 minutes"
    ]
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "System Implementation",
    desc: "Clean, reversible automations that your team actually uses.",
    bullets: [
      "No complex integrations or dependencies",
      "Simple handoff documentation",
      "Training videos and SOPs",
      "Reversible if you change your mind"
    ]
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Revenue Impact",
    desc: "We only sell what we can point to for revenue impact.",
    bullets: [
      "14-30 day implementation timeline",
      "Measurable increase in booked calls",
      "Revenue attribution and reporting",
      "ROI tracking and optimization"
    ]
  }
];