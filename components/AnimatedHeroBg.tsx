"use client";

import { useEffect, useState } from "react";

export default function AnimatedHeroBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="animate-hero-float-1 absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="animate-hero-float-2 absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="animate-hero-float-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-purple-500 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
}