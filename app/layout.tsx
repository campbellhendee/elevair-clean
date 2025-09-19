import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevair — We don’t scale teams, we scale revenue",
  description: "Two‑man strike team fixing broken sales systems and using AI to follow up 24/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* TODO: Add Microsoft Clarity Analytics
            1. Sign up at clarity.microsoft.com (free)
            2. Create a project, get your Clarity ID
            3. Import Script from "next/script"
            4. Add Script component here with your Clarity tracking code
        */}
      </body>
    </html>
  );
}
