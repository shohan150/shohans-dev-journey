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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        white: "#ffffff",
        textColor: "var(--text-color)",
        primarylight: "var(--primary-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
