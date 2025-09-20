import "./../styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import StickyBar from "../components/StickyBar";

export const metadata: Metadata = {
  title: "Elevair — We don’t scale teams, we scale revenue",
  description: "Two‑man strike team fixing broken sales systems and using AI to follow up 24/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <StickyBar />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
