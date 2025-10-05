import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3F5F4F", // Sage green (from logo) - now primary action color
          foreground: "#F6E9DC",
          light: "#5A7A6A",
          dark: "#2D4839",
        },
        plum: {
          DEFAULT: "#5D1451", // Deep Plum - now secondary
          foreground: "#F6E9DC",
          light: "#7A1A68",
        },
        secondary: {
          DEFAULT: "#D9A5B3", // Dusty Blush
          foreground: "#5D1451",
        },
        accent: {
          DEFAULT: "#F6E9DC", // Soft Beige (matches logo background)
          foreground: "#3F5F4F",
        },
        sage: {
          DEFAULT: "#3F5F4F", // Sage green from logo
          light: "#5A7A6A",
          dark: "#2D4839",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;