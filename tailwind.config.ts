import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "hsl(204 62% 28%)", foreground: "hsl(0 0% 100%)" },
        secondary: { DEFAULT: "hsl(44 55% 54%)", foreground: "hsl(0 0% 100%)" },
        foreground: "hsl(0 0% 1%)",
        background: "hsl(0 0% 100%)",
        muted: { DEFAULT: "hsl(210 20% 98%)", foreground: "hsl(215 16% 47%)" },
        border: "hsl(214 32% 91%)",
      },
      fontFamily: {
        noor: ["Noor", "sans-serif"],
        sans: ["Tajawal", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
