import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import HoverCard from "../../components/HoverCard";
import SectionReveal from "../../components/SectionReveal";

export const metadata = {
  title: "Services - Elevair",
  description: "Two-person strike team. Fast installs. More booked calls in 14–30 days.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We build systems that respond instantly, log every lead, and book calls—no 30‑page decks.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => (
              <HoverCard
                key={service.title}
                className="border border-white/10 rounded-2xl transition-all duration-300"
                expandedContent={
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.detailedFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-xs text-slate-400 italic">
                        {service.timeline}
                      </p>
                    </div>
                  </div>
                }
              >
                <div className="p-8">
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
              </HoverCard>
            ))}
          </div>
        </SectionReveal>

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
    ],
    detailedFeatures: [
      "Custom-branded lead capture forms",
      "Real-time Slack/email notifications",
      "Salesforce, HubSpot, or Pipedrive sync",
      "Lead scoring and qualification rules",
      "Multi-channel follow-up sequences",
      "SMS and email automation",
      "Response time analytics",
      "Lead source attribution"
    ],
    timeline: "Implementation: 5-7 business days"
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
    ],
    detailedFeatures: [
      "Zapier or Make.com workflows",
      "Custom API integrations",
      "Database setup and migration",
      "User permission configuration",
      "Backup and rollback procedures",
      "Team training sessions",
      "Video documentation library",
      "24/7 support during rollout"
    ],
    timeline: "Implementation: 10-14 business days"
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
    ],
    detailedFeatures: [
      "Revenue attribution modeling",
      "Conversion rate optimization",
      "A/B testing frameworks",
      "Custom reporting dashboards",
      "Monthly performance reviews",
      "ROI calculation and tracking",
      "Growth opportunity identification",
      "Continuous optimization support"
    ],
    timeline: "Results visible: 14-30 days post-launch"
  }
];