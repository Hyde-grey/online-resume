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
        // Futuristic UI colors
        cyber: {
          black: "#050505",
          dark: "#0d1117",
          darker: "#161b22",
          blue: "#00d8ff",
          cyan: "#0ff0fc",
          teal: "#0ba5ec",
          glow: "#00e6e6",
          gray: "#2d333b",
          "gray-light": "#444c56",
          border: "#1b2431",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        tech: ["'Rajdhani'", "'Orbitron'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 5px theme('colors.cyber.glow'), 0 0 20px theme('colors.cyber.glow')",
        "glow-sm":
          "0 0 2px theme('colors.cyber.glow'), 0 0 10px theme('colors.cyber.glow')",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0, 230, 230, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 230, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "20px 20px",
      },
    },
  },
  plugins: [],
};
