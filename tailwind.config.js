/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "ui-sans-serif", "system-ui", "sans-serif"],
        /** Header navigation only — unchanged from previous site */
        headerNav: [
          "var(--font-inter-tight)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        /** Header logo only — Oswald */
        display: ["var(--font-oswald)", "var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      colors: {
        /** Secondary brand — navy */
        navy: {
          50: "#f0f4fa",
          100: "#dce6f2",
          200: "#b8c9df",
          300: "#8fa3c4",
          400: "#5f7399",
          500: "#3d5278",
          600: "#2c3f62",
          700: "#243352",
          800: "#1c2840",
          900: "#152238",
          950: "#0c1526",
        },
      },
      backgroundImage: {
        /** Light hero: white base + subtle navy glow */
        "hero-glow":
          "radial-gradient(ellipse 90% 60% at 50% -15%, rgba(21, 34, 56, 0.09), transparent 55%)",
        /** Subtle grid on white */
        "grid-light":
          "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(248,250,252,1)), linear-gradient(rgba(21, 34, 56, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21, 34, 56, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};
