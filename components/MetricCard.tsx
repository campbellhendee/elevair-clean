interface MetricCardProps {
  before: string;
  after: string;
  metric: string;
  timeframe?: string;
  className?: string;
}

export default function MetricCard({ 
  before, 
  after, 
  metric, 
  timeframe = "in 30 days",
  className = "" 
}: MetricCardProps) {
  return (
    <div className={`
      bg-white/[0.02] border border-white/10 rounded-2xl p-6 
      hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300
      ${className}
    `}>
      <div className="text-center">
        <div className="mb-4">
          <h3 className="text-headline mb-2">{metric}</h3>
          <p className="text-supporting">{timeframe}</p>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-1">Before</div>
            <div className="text-2xl font-bold text-slate-300">{before}</div>
          </div>
          
          <div className="text-cyan-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          
          <div className="text-center">
            <div className="text-cyan-400 text-sm mb-1">After</div>
            <div className="text-metric">{after}</div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          <div className="text-sm text-slate-400">
            Typical results for B2B service businesses
          </div>
        </div>
      </div>
    </div>
  );
}