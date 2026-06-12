/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#2d3748",
        accent: "#4299e1",
        cyber: {
          black: "#050508",
          dark: "#080b12",
          darker: "#0c1019",
          surface: "#111827",
          blue: "#0ea5e9",
          cyan: "#67e8f9",
          teal: "#38bdf8",
          glow: "rgba(56, 189, 248, 0.45)",
          gray: "#1e293b",
          "gray-light": "#334155",
          border: "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(56, 189, 248, 0.22)",
          muted: "#64748b",
          "text-secondary": "#94a3b8",
          "text-primary": "#f1f5f9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        tech: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(56, 189, 248, 0.18)",
        "glow-sm": "0 0 12px rgba(56, 189, 248, 0.12)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "glass-sm": "0 4px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      borderRadius: {
        glass: "14px",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #f8fafc 0%, #bae6fd 45%, #38bdf8 100%)",
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
      },
    },
  },
  plugins: [],
};
