"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface PricingTierProps {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function PricingTier({
  title,
  description,
  features,
  highlighted = false,
  ctaText = "Contact for Quote",
  ctaHref = "/contact",
  className = ""
}: PricingTierProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`
        relative rounded-2xl border transition-all duration-300 ease-out
        ${highlighted 
          ? 'border-cyan-400/50 bg-gradient-to-b from-cyan-400/[0.08] to-transparent shadow-lg shadow-cyan-500/20' 
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
        }
        hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10
        cursor-pointer
        ${className}
      `}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-400 mb-4">{description}</p>
          <div className="text-slate-300 text-lg font-semibold">
            Contact for Quote
          </div>
        </div>

        {/* Always visible features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg 
                className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Expandable features */}
        {features.length > 3 && (
          <div 
            className={`
              transition-all duration-300 ease-out origin-top
              ${isExpanded 
                ? 'opacity-100 scale-y-100 max-h-96 mb-6' 
                : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'
              }
            `}
          >
            <ul className="space-y-2 pt-4 border-t border-white/10">
              {features.slice(3).map((feature, index) => (
                <li key={index + 3} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={ctaHref}
          className={`
            block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all
            focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
            ${highlighted
              ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {ctaText}
        </Link>

        {/* Expand indicator */}
        {features.length > 3 && (
          <div 
            className="absolute top-4 right-4 text-slate-400 group-hover:text-cyan-400 transition-colors"
            aria-hidden="true"
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}