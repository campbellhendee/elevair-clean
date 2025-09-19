"use client";
import { useEffect } from "react";

export default function BookPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const url = "https://calendly.com/campbellhendee-elevair/30min";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book a Free 15-min Teardown</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get a quick analysis of your current sales process and see exactly where leads are falling through the cracks.
          </p>
        </div>
        <div 
          className="calendly-inline-widget" 
          data-url={url} 
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </main>
  );
}