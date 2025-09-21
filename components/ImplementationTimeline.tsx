interface TimelineStepProps {
  week: number;
  title: string;
  description: string;
  deliverables: string[];
  isActive?: boolean;
}

function TimelineStep({ week, title, description, deliverables, isActive = false }: TimelineStepProps) {
  return (
    <div className={`
      relative p-6 rounded-2xl border transition-all duration-300
      ${isActive 
        ? 'bg-cyan-400/5 border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
      }
    `}>
      <div className="flex items-start gap-4">
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
          ${isActive 
            ? 'bg-cyan-400 text-slate-900' 
            : 'bg-white/10 text-slate-300'
          }
        `}>
          {week}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-300 mb-4">{description}</p>
          
          <div className="space-y-2">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <span className="text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImplementationTimelineProps {
  className?: string;
}

export default function ImplementationTimeline({ className = "" }: ImplementationTimelineProps) {
  const steps = [
    {
      week: 1,
      title: "Audit & Strategy",
      description: "We analyze your current systems and identify quick wins",
      deliverables: [
        "Complete lead flow audit",
        "Response time analysis", 
        "3-day roadmap with priorities",
        "Quick wins you can implement immediately"
      ]
    },
    {
      week: 2,
      title: "System Setup",
      description: "We build and integrate your new lead capture systems",
      deliverables: [
        "Custom forms with instant notifications",
        "CRM integration and automation",
        "Response templates and sequences",
        "Testing and validation"
      ],
      isActive: true
    },
    {
      week: 3,
      title: "Team Training",
      description: "Your team learns the new systems and processes",
      deliverables: [
        "Live training sessions",
        "Documentation and SOPs",
        "Practice scenarios",
        "Support channel setup"
      ]
    },
    {
      week: 4,
      title: "Optimization",
      description: "We refine based on real data and early results",
      deliverables: [
        "Performance analysis",
        "A/B testing implementation", 
        "Conversion optimization",
        "Results reporting and next steps"
      ]
    }
  ];

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-headline mb-4">30-Day Implementation Process</h2>
        <p className="text-subhead text-slate-300 max-w-2xl mx-auto">
          Transparent timeline with weekly deliverables. You know exactly what to expect.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <TimelineStep key={step.week} {...step} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          30-day results guarantee or 50% refund
        </div>
      </div>
    </div>
  );
}