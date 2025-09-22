import { Clock, TrendingDown, BarChart3 } from "lucide-react";

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
  // Determine icon based on metric type
  const getIcon = () => {
    if (metric.toLowerCase().includes('time') || metric.toLowerCase().includes('response')) {
      return Clock;
    } else if (metric.toLowerCase().includes('cost') || metric.toLowerCase().includes('lead')) {
      return TrendingDown;
    } else {
      return BarChart3;
    }
  };

  const IconComponent = getIcon();

  return (
    <article className={`
      group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.04] p-8 
      hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/10 transition-all
      ${className}
    `}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-slate-400">{metric}</h3>
        <IconComponent className="h-5 w-5 text-cyan-400 opacity-60" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-slate-500">Before:</span>
          <span className="text-2xl font-bold text-slate-400 line-through opacity-60">{before}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 text-2xl">↓</span>
        </div>
        
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-cyan-400/80">After:</span>
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{after}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-slate-500">{timeframe}</p>
      </div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}