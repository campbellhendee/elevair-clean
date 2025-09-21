"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTAButton from "./CTAButton";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/results", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const focus = "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  return (
    <header role="banner" className="sticky top-0 z-40 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`text-lg font-semibold tracking-tight ${focus}`}>
          Elevair
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`${active ? "text-white" : "hover:text-white"} ${focus}`}
              >
                {l.label}
              </Link>
            );
          })}
          <CTAButton href="/book" placement="header" className="ml-2">
            Book
          </CTAButton>
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-mobile-nav"
          className={`md:hidden rounded border border-white/10 px-3 py-2 text-slate-200 ${focus}`}
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
      </div>
      {open && (
        <nav id="primary-mobile-nav" aria-label="Primary mobile" className="md:hidden border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-3 grid gap-3">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 ${active ? "text-white" : "text-slate-200 hover:text-white"} ${focus}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
            <CTAButton href="/book" placement="header" className="justify-center">
              Book
            </CTAButton>
          </div>
        </nav>
      )}
    </header>
  );
}
