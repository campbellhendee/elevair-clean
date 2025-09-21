"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bolt, Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const focus = "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header role="banner" className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-slate-950/80 border-white/10 shadow-[0_6px_20px_rgba(0,0,0,.35)] backdrop-blur"
          : "bg-transparent border-transparent"
      }`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight ${focus}`}>
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/[.04] ring-1 ring-white/10">
            <Bolt className="h-4 w-4 text-cyan-400" aria-hidden="true" />
          </span>
          <span className="leading-none">Elevair</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`${active ? "text-white border-b-2 border-cyan-400" : "hover:text-white border-b-2 border-transparent hover:border-white/20"} pb-1 ${focus}`}
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
          className={`md:hidden rounded border border-white/10 p-2 text-slate-200 hover:bg-white/5 ${focus}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="primary-mobile-nav" aria-label="Primary mobile" className="md:hidden border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-3 grid gap-2">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-2 py-2 ${active ? "text-white bg-white/[.04]" : "text-slate-200 hover:text-white hover:bg-white/[.04]"} ${focus}`}
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
