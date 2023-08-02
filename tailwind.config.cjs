/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#1E1E1E",
          200: "#2d2d2d",
          300: "#454545",
        },
        typo: {
          100: "#dcdcdc",
          200: "#929292",
        },
        accent: {
          100: "#c49216",
          200: "#5e3b00",
        },
        primary: {
          100: "#FFD700",
          200: "#ddb900",
          300: "#917800",
        },
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
};
