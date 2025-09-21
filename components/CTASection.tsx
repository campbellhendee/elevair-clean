"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  badge?: string;
  source?: string;
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  badge,
  source = "cta-section"
}: CTASectionProps) {
  const handleClick = (action: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'book_click', {
        source,
        action
      });
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-headline font-bold text-white mb-6">
        {title}
      </h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
        {description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href={primaryButton.href}
          onClick={() => handleClick("primary")}
          className="rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all duration-200 flex items-center gap-2"
        >
          {primaryButton.text}
          <ArrowRight className="h-5 w-5" />
        </Link>
        
        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            onClick={() => handleClick("secondary")}
            className="text-slate-300 hover:text-white font-medium underline underline-offset-4 hover:underline-offset-2 transition-all duration-200"
          >
            {secondaryButton.text}
          </Link>
        )}
      </div>
      
      {badge && (
        <p className="text-slate-400 text-sm mt-4">
          {badge}
        </p>
      )}
    </div>
  );
}