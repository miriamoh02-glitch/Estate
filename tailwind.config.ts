import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F2",
        foreground: "#111315",
        primary: {
          DEFAULT: "#111315",
          foreground: "#F7F5F2",
        },
        accent: {
          DEFAULT: "#C8A96B",
          foreground: "#111315",
        },
        secondary: {
          DEFAULT: "#5F6368",
          foreground: "#F7F5F2",
        },
        success: {
          DEFAULT: "#0E5F4B",
          foreground: "#F7F5F2",
        },
        muted: {
          DEFAULT: "#E8E4DE",
          foreground: "#5F6368",
        },
        border: "#DDD8D0",
        card: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "7.5rem",
        "section-sm": "5rem",
      },
      maxWidth: {
        editorial: "90rem",
      },
      boxShadow: {
        luxury: "0 24px 80px -12px rgba(17, 19, 21, 0.12)",
        "luxury-sm": "0 8px 32px -8px rgba(17, 19, 21, 0.08)",
        elevated: "0 16px 48px -12px rgba(17, 19, 21, 0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
