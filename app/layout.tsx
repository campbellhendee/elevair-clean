import "../styles/globals.css"
import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Script from "next/script"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-syne",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Elevair — AI that runs your front office",
  description:
    "Elevair builds AI automation for businesses — receptionists that answer 24/7, smart scheduling that books appointments, and lead follow-up that converts. Built in Austin, TX.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0a0a0f] text-slate-100 antialiased font-body">
        {/* Page content */}
        <div className="relative">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-accent-primary text-white px-3 py-2 rounded"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" role="main">
            {children}
          </main>
          <Footer />
        </div>

        {/* Google Analytics */}
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

        {/* GSAP removed — using native IntersectionObserver for scroll animations */}
      </body>
    </html>
  )
}
