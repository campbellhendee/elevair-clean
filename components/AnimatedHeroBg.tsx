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
      {/* More subtle animated gradient orbs with lower opacity */}
      <div className="absolute inset-0 opacity-15"> {/* Reduced from opacity-30 */}
        <div className="animate-hero-float-1 absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/60 rounded-full blur-3xl" />
        <div className="animate-hero-float-2 absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl" />
        <div className="animate-hero-float-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-purple-500/40 rounded-full blur-3xl opacity-15" />
      </div>
      
      {/* Add subtle mesh gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}