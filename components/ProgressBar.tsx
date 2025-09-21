"use client";

import { useState, useEffect } from "react";

interface ProgressBarProps {
  className?: string;
  color?: string;
}

export default function ProgressBar({ 
  className = "",
  color = "bg-cyan-400"
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(Math.min(100, Math.max(0, scrollPercent)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-50 h-1 bg-white/10
        ${className}
      `}
    >
      <div 
        className={`
          h-full transition-all duration-150 ease-out
          ${color}
        `}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-label={`Page scroll progress: ${Math.round(progress)}%`}
      />
    </div>
  );
}