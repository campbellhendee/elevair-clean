import { Bolt } from "lucide-react";
import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@elevair.org";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      {/* mobile responsive tweak: stack on mobile, row on desktop */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-10 grid gap-6 text-sm text-slate-400 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Bolt className="h-4 w-4 text-cyan-400" />
          <span>Elevair</span>
        </div>
        {/* mobile responsive tweak: 1-column nav on mobile, wrap on desktop */}
        <nav aria-label="Footer" className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-2 md:gap-4">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/process" className="hover:text-white">Process</Link>
          <Link href="/results" className="hover:text-white">Results</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </nav>
        <div className="flex flex-col items-center md:items-end gap-2 text-xs">
          <a href={`mailto:${supportEmail}`} className="hover:text-white">
            {supportEmail}
          </a>
          <span>Â© {new Date().getFullYear()} Elevair. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

