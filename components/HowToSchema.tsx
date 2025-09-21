import Script from "next/script";

export default function HowToSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Elevair Process",
    step: [
      { "@type": "HowToStep", name: "Discover & Plan", text: "Analyze workflow; short plan with first steps." },
      { "@type": "HowToStep", name: "Build & Install", text: "Install AI intake, booking, follow-ups, CRM." },
      { "@type": "HowToStep", name: "Train & Launch", text: "Guides + Looms; team uses it immediately." },
      { "@type": "HowToStep", name: "Optimize & Grow", text: "Track, improve, expand to retention/reviews." }
    ]
  };
  return (
    <Script id="howto-schema" type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
}
