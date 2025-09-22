import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Elevair — We don’t scale teams, we scale revenue",
  description: "Two-person strike team. Fast installs. More booked calls in 14–30 days.",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cyan-400 text-slate-900 px-3 py-2 rounded">Skip to content</a>
        {/* Global background layers (fixed behind content) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-aurora bg-aurora-fast bg-aurora-diagonal bg-aurora-bold" />
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-vignette" />
        </div>
        <Header />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
        
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
