/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightsteelblue: "rgba(205, 216, 255, 0.34)",
        black: "#000",
        gainsboro: "#d9d9d9",
        lightgreen: "#c2ee96",
        cornflowerblue: "#a7baff",
        white: "#fff",
        gray: {
          "100": "#080808",
          "200": "rgba(0, 0, 0, 0.67)",
        },
        mediumslateblue: "#3562ff",
        lightgray: "#d1d1d1",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "love-ya-like-a-sister": "'Love Ya Like A Sister'",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
        "30xl": "49px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      xl: "20px",
      "21xl": "40px",
      "29xl": "48px",
      "3xl": "22px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
