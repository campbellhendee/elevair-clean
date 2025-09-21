"use client";

import { useState } from "react";
import { ChevronDown, Clock, Target, Users, Zap, TrendingUp } from "lucide-react";

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  features: string[];
  results: string;
  timeframe: string;
}

const iconMap = {
  Target,
  Users,
  Zap,
  TrendingUp
};

export default function ServiceCard({
  iconName,
  title,
  description,
  features,
  results,
  timeframe
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[iconName as keyof typeof iconMap];

  const handleToggle = () => {
    setExpanded(!expanded);
    
    // Track if analytics exists
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'service_card_click', {
        service: title,
        action: expanded ? 'collapse' : 'expand'
      });
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{timeframe}</span>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full p-4 text-left bg-slate-700/50 rounded-xl border border-slate-600 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 transition-colors duration-200"
          aria-expanded={expanded}
          id={`service-button-${title.replace(/\s+/g, '-').toLowerCase()}`}
          aria-controls={`service-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span className="font-medium text-white">
            {expanded ? "Hide details" : "See what's included"}
          </span>
          <ChevronDown
            className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
          id={`service-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
          role="region"
          aria-labelledby={`service-button-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-600">
            <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
              What You Get
            </h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-600">
              <p className="text-sm text-green-400 font-medium">
                {results}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}