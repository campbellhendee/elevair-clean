import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";

export const metadata = {
  title: "Results - Elevair",
  description: "Real results from real clients. See the revenue impact we deliver.",
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Results That Matter
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real results from real clients. We only sell what we can point to for revenue impact.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-400/10">
                  <LineChart className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <p className="text-slate-400 text-sm">{study.industry}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {study.kpi}
                </div>
                <p className="text-slate-300">{study.result}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold mb-3">What we implemented:</h4>
                <ul className="space-y-2">
                  {study.implementation.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-cyan-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Get similar results
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const caseStudies = [
  {
    company: "SaaS Startup",
    industry: "B2B Software",
    kpi: "+340% qualified leads",
    result: "Went from 12 to 53 qualified leads per month within 6 weeks of implementation.",
    implementation: [
      "Custom lead scoring and qualification system",
      "Automated follow-up sequences for trial users",
      "Integration with existing CRM and email tools",
      "Response time optimization (under 5 minutes)"
    ]
  },
  {
    company: "Consulting Agency",
    industry: "Professional Services",
    kpi: "+180% booked calls",
    result: "Increased discovery calls from 8 to 22 per month, with 65% show-up rate.",
    implementation: [
      "Website form optimization and A/B testing",
      "Calendar booking automation with reminders",
      "Lead nurturing sequence for warm prospects",
      "Sales pipeline tracking and reporting"
    ]
  },
  {
    company: "E-commerce Brand",
    industry: "Retail",
    kpi: "+250% email conversion",
    result: "Email marketing revenue increased from $15K to $52K monthly within 8 weeks.",
    implementation: [
      "Abandoned cart recovery automation",
      "Segmented email campaigns based on behavior",
      "Post-purchase follow-up sequences",
      "Customer lifetime value optimization"
    ]
  }
];