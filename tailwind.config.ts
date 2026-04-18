import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f6f9",
          100: "#e6ebf2",
          200: "#c3cfdd",
          300: "#9badc2",
          400: "#6a7f99",
          500: "#465d7a",
          600: "#33475f",
          700: "#253649",
          800: "#1a2a3a",
          900: "#101a26",
          950: "#0a1119",
        },
        sand: {
          50: "#faf9f7",
          100: "#f3f1ec",
          200: "#e5e1d8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(16, 26, 38, 0.25)",
        ring: "0 0 0 1px rgba(26, 42, 58, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(circle at 1px 1px, rgba(26, 42, 58, 0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
