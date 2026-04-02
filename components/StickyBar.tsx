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
      <div className="bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/[0.06] px-4 py-3 safe-area-inset">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-medium">Automate your front office</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="
                bg-white/10 text-white px-4 py-2 rounded-lg 
                hover:bg-white/20 transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]
                text-sm font-medium
              "
            >
              Get Quote
            </a>
            <a
              href="/onboarding.html"
              className="
                bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg
                hover:shadow-lg hover:shadow-indigo-500/20 transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]
                text-sm font-semibold
              "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
