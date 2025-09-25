import Link from "next/link";
import { Mail } from "lucide-react";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@elevair.org";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950/50 backdrop-blur-xl border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-sm">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/process" className="hover:text-cyan-400 transition-colors">Process</Link></li>
              <li><Link href="/results" className="hover:text-cyan-400 transition-colors">Results</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">All Services</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/book" className="hover:text-cyan-400 transition-colors">Book a Call</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <a href={`mailto:${supportEmail}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="h-4 w-4" />
              {supportEmail}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Elevair. All rights reserved.</p>
          <p>Built for clarity, speed, and results.</p>
        </div>
      </div>
    </footer>
  );
}

