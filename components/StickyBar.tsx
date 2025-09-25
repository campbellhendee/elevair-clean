"use client";

import { useState, useEffect } from "react";

interface StickyBarProps {
  className?: string;
  threshold?: number;
}

export default function StickyBar({ 
  className = "",
  threshold = 100 
}: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <div 
      className={`
        fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-out md:hidden
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full opacity-0 pointer-events-none'
        }
        ${className}
      `}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-inset">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-medium">Ready to elevate your space?</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="
                bg-white/10 text-white px-4 py-2 rounded-lg 
                hover:bg-white/20 transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                text-sm font-medium
              "
            >
              Get Quote
            </a>
            <a
              href="/book"
              className="
                bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg 
                hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                text-sm font-semibold
              "
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
