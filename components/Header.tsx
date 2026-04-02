"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideMobile, setHideMobile] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.innerWidth <= 640) {
        const currentY = window.scrollY;
        if (currentY > lastScrollY.current && currentY > 32) {
          setHideMobile(true);
        } else {
          setHideMobile(false);
        }
        lastScrollY.current = currentY;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-transparent"
      } ${hideMobile ? "header-hide-mobile" : ""}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-heading text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Elevair
          </span>
          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/book"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
        >
          Book a Call
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-mobile-nav"
          className="md:hidden rounded-lg border border-white/[0.08] p-2.5 text-slate-300 hover:bg-white/[0.03]"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          id="primary-mobile-nav"
          aria-label="Primary mobile"
          className="md:hidden fixed inset-0 z-50 bg-[#0a0a0f] flex flex-col"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Elevair
              </span>
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </Link>
            <button
              aria-label="Close menu"
              className="rounded-lg border border-white/[0.08] p-2.5 text-slate-300 hover:bg-white/[0.03]"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Center links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-2xl font-heading font-bold transition-colors ${
                    active ? "text-white" : "text-white hover:text-indigo-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mb-12 px-6">
            <Link
              href="/book"
              className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-medium text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
              onClick={() => setOpen(false)}
            >
              Book a Call
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>
      )}

      <style>{`
        @media (max-width: 640px) {
          .header-hide-mobile {
            transform: translateY(-110%) !important;
          }
        }
      `}</style>
    </header>
  );
}
