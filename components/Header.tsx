"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/results", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header role="banner" className="sticky top-0 z-40 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">Elevair</Link>
        <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
          ))}
          <Link href="/book" className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-2.5 text-slate-900 font-semibold hover:bg-cyan-300">
            Book
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden rounded border border-white/10 px-3 py-2 text-slate-200"
          onClick={() => setOpen(o => !o)}
        >
          Menu
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="md:hidden border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-3 grid gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="block text-slate-200 py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/book" className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-300" onClick={() => setOpen(false)}>
              Book
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
