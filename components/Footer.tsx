import { Bolt } from "lucide-react";
import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@elevair.org";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Bolt className="h-4 w-4 text-cyan-400" />
          <span>Elevair</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/process" className="hover:text-white">Process</Link>
          <Link href="/results" className="hover:text-white">Results</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </nav>
        <div className="flex flex-col items-center gap-2 text-xs">
          <a href={`mailto:${supportEmail}`} className="hover:text-white">
            {supportEmail}
          </a>
          <span>© {new Date().getFullYear()} Elevair. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

