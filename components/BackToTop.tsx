"use client";

import { useState, useEffect } from "react";

interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export default function BackToTop({ 
  className = "",
  threshold = 400 
}: BackToTopProps) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        w-12 h-12 rounded-full bg-cyan-400 text-slate-900
        shadow-lg shadow-cyan-500/20 
        transition-all duration-300 ease-out
        hover:bg-cyan-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-16 opacity-0 pointer-events-none'
        }
        ${className}
      `}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg 
        className="w-5 h-5 mx-auto" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}