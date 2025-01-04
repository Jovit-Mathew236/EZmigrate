/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Add state colors
      info: "hsl(var(--info))", // #003BFF
      success: "hsl(var(--success))", // #27AE80
      warning: "hsl(var(--warning))", // #E2B93B
      error: "hsl(var(--error))", // #EB5757

      // Add grayscale
      gray: {
        100: "hsl(var(--gray-100))", // #333333
        200: "hsl(var(--gray-200))", // #4F4F4F
        300: "hsl(var(--gray-300))", // #828282
        400: "hsl(var(--gray-400))", // #BDBDBD
        500: "hsl(var(--gray-500))", // #E0E0E0
        600: "hsl(var(--brand-gray-600))", // #F5F5F5
      },
      fontSize: {
        h1: ["56px", { lineHeight: "66px", fontWeight: "500" }],
        h2: ["48px", { lineHeight: "58px", fontWeight: "500" }],
        h3: ["40px", { lineHeight: "50px", fontWeight: "500" }],
        h4: ["32px", { lineHeight: "42px", fontWeight: "500" }],
        h5: ["24px", { lineHeight: "34px", fontWeight: "500" }],
        h6: ["20px", { lineHeight: "30px", fontWeight: "500" }],
        large: ["20px", { lineHeight: "30px" }],
        medium: ["18px", { lineHeight: "28px" }],
        normal: ["16px", { lineHeight: "26px" }],
        small: ["14px", { lineHeight: "24px" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
