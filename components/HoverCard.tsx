"use client";

import { useState, ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  expandedContent?: ReactNode;
  className?: string;
}

export default function HoverCard({ 
  children, 
  expandedContent,
  className = "" 
}: HoverCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`
        group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 
        transition-all duration-300 ease-out
        hover:border-white/20 hover:bg-white/[0.04] hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10
        cursor-pointer
        ${className}
      `}
      onClick={() => expandedContent && setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && expandedContent) {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      tabIndex={expandedContent ? 0 : -1}
      role={expandedContent ? "button" : undefined}
      aria-expanded={expandedContent ? isExpanded : undefined}
    >
      {/* Gradient accent line */}
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true" 
      />
      
      <div className="relative">
        {children}
        
        {expandedContent && (
          <div 
            className={`
              mt-4 pt-4 border-t border-white/10 transition-all duration-300 ease-out origin-top
              ${isExpanded 
                ? 'opacity-100 scale-y-100 max-h-96' 
                : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'
              }
            `}
          >
            {expandedContent}
          </div>
        )}
        
        {expandedContent && (
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