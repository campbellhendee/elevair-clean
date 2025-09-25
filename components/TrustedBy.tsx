import React from "react";

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: "/logos/logo-1.svg", alt: "Northstar Ventures" },
  { src: "/logos/logo-2.svg", alt: "Atlas Services" },
  { src: "/logos/logo-3.svg", alt: "Harbor Labs" },
  { src: "/logos/logo-4.svg", alt: "Clearway" },
  { src: "/logos/logo-5.svg", alt: "Orion Group" },
  { src: "/logos/logo-6.svg", alt: "Summit Co." },
];

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="px-6 sm:px-8 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400">Trusted by forward‑thinking teams</p>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-6 opacity-80">
          {LOGOS.map((logo) => (
            <div key={logo.src} className="h-8 flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                height={32}
                className="h-8 w-auto grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
