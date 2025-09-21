"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'book_click', {
        source: 'services_sticky',
        action: 'primary'
      });
    }
  };

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300">
      <div className="bg-slate-950/95 backdrop-blur-md border-t border-white/10 p-4">
        <Link
          href="/book"
          onClick={handleClick}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 min-h-[44px]"
        >
          Book a Free 30-min Teardown
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}