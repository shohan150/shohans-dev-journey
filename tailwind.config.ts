import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        white: "#ffffff",
        textColor: "var(--text-color)",
        primarylight: "var(--primary-light)",
        menuColor: "var(--menu-color)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
