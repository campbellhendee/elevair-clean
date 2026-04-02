import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0f",
        "bg-secondary": "#0f0f18",
        "bg-card": "rgba(255,255,255,0.03)",
        "bg-card-hover": "rgba(255,255,255,0.06)",
        "accent-primary": "#6366f1",
        "accent-secondary": "#8b5cf6",
        "accent-cyan": "#06b6d4",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#475569",
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          glow: "rgba(99,102,241,0.3)",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "Syne", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "orb-float-slow": "orb-float 8s ease-in-out infinite",
        "orb-float-fast": "orb-float 10s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "fade-up": "fade-up 0.6s ease both",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6366f1, #8b5cf6)",
        "gradient-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.08), transparent)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(99, 102, 241, 0.15)",
        "glow-strong": "0 0 80px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [],
}

export default config
