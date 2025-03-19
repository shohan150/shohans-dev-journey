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
        primary: "#1d1e4e",
        secondary: "#425971",
        tertiary: "#6B6EFF",
        buttonHover: "#131a42",
        textBlack: "#212529",
        textGray: "#69796a",
        blue: "#3F7AFC",
        green: "#71dd37",
        red: "#ff3e1d",
        yellow: "#ffab00",
        bgBlue: "#E1F1FF",
        bgGreen: "#D2F2D4",
        bgGray: "#00000010",
        primarylight: "#a9004788",
        textColor: "#fff",
        white: "#ffffff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // // for mozilla browser only
        // ".scrollbar-thin": {
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "#ffffffcc transparent",
        // },
        // for chrome and other browsers
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffffff40",
            borderRadius: "20px",
          },
        },
        ".scrollbar-table": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#71dd37",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;
