import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PricingTier from "../../components/PricingTier";
import SectionReveal from "../../components/SectionReveal";

export const metadata = {
  title: "Pricing - Elevair",
  description: "Simple, transparent pricing. One project fee, optional retainer.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <div className="text-center mb-16">
            <h1 className="text-headline mb-6">
              Transparent Investment
            </h1>
            <p className="text-subhead text-slate-300 max-w-3xl mx-auto">
              One project fee covers everything. Optional ongoing support. 30-day results guarantee or 50% refund.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingTier
              title="Project Package"
              description="Complete implementation with training and support"
              features={[
                "Complete audit & roadmap",
                "System implementation (14-30 days)",
                "Team training & documentation",
                "4 weeks of tweaks & optimization",
                "ROI measurement & reporting",
                "Reversible if you change your mind",
                "Custom forms with instant notifications",
                "CRM integration and lead scoring", 
                "Automated follow-up sequences",
                "Response time under 5 minutes",
                "Revenue attribution modeling",
                "A/B testing frameworks"
              ]}
              highlighted={true}
              ctaText="Book a Call"
              ctaHref="/book"
            />
            
            <PricingTier
              title="Ongoing Retainer"
              description="Month-to-month support and optimization"
              features={[
                "Ongoing system optimization",
                "Monthly performance review",
                "New feature implementation",
                "Priority support & troubleshooting",
                "Strategy & planning sessions",
                "Cancel anytime",
                "Conversion rate optimization",
                "Custom reporting dashboards",
                "Growth opportunity identification",
                "Continuous A/B testing"
              ]}
              ctaText="Discuss Retainer"
              ctaHref="/contact"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
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
        </SectionReveal>
      </div>
    </div>
  );
}
