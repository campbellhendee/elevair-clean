"use client";

import { useState, useRef, ReactNode, useId } from "react";

interface AccordionProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ 
  trigger, 
  children, 
  className = "",
  defaultOpen = false 
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();
  const contentId = useId();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div className={`border border-white/10 rounded-lg overflow-hidden ${className}`}>
      <button
        id={triggerId}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-4 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{trigger}</span>
          <svg 
            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        id={contentId}
        ref={contentRef}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 border-t border-white/10 text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  children: ReactNode;
  allowMultiple?: boolean;
  className?: string;
}

export function AccordionGroup({ 
  children, 
  allowMultiple = false,
  className = "" 
}: AccordionGroupProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
}