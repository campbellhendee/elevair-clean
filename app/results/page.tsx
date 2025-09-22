import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";
import SectionReveal from "../../components/SectionReveal";

export const metadata = {
  title: "Technology Demo - Elevair",
  description: "See our AI technology in action. Currently in beta development.",
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Technology Demonstration
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Currently building the future of business automation. Join our beta program to experience cutting-edge AI technology.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="space-y-8 mb-16">
            {techDemos.map((demo, index) => (
              <div key={index} className="border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-400/10">
                    <LineChart className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{demo.feature}</h3>
                    <p className="text-slate-400 text-sm">{demo.status}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {demo.capability}
                  </div>
                  <p className="text-slate-300">{demo.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-slate-300">Technical Details:</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {demo.techSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition"
          >
            Join Beta Program
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const techDemos = [
  {
    feature: "AI Customer Service",
    status: "Beta - Active Development",
    capability: "Sub-second Response Time",
    description: "Our AI can respond to customer inquiries instantly, trained on your specific business knowledge and tone.",
    techSpecs: [
      "GPT-4 powered natural language processing",
      "Custom knowledge base training for your business",
      "Multi-channel support (email, chat, SMS)",
      "Seamless human handoff when needed"
    ]
  },
  {
    feature: "Appointment Booking System",
    status: "Beta - Testing Phase",
    capability: "Fully Automated Scheduling",
    description: "AI handles the entire booking process from initial inquiry to calendar confirmation and reminders.",
    techSpecs: [
      "Calendar integration with all major platforms",
      "Intelligent availability management",
      "Automated confirmation and reminder system",
      "No-show prediction and prevention"
    ]
  },
  {
    feature: "Lead Qualification Engine",
    status: "Beta - Early Access",
    capability: "Smart Lead Scoring",
    description: "Advanced AI evaluates and scores leads automatically, prioritizing your highest-value prospects.",
    techSpecs: [
      "Machine learning based qualification criteria",
      "Real-time lead scoring and routing",
      "CRM integration and data synchronization",
      "Behavioral analysis and predictive modeling"
    ]
  }
];