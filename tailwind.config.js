/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/background.png')",
        button: "url('/images/button.png')",
        container: "url('/images/container-transparent.png') 30 round",
        //gradients
      },
      fontFamily: {
        primary: ["gabarito", "Arial", "sans-serif"], // Add fallback fonts
        barlow: ["barlow", "Helvetica", "sans-serif"], // Add fallback fonts
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        //new
        sand: {
          DEFAULT: "#FFF1B4",
          300: "#F0E3AA",
          600: "#7f785a",
          800: "#666048",
        },
        batman: "#181818",

        grayscale: {
          100: "#E2E2E2", // Added - very light gray
          200: "#BFBFBF", // Added - between 100 and 300
          300: "#A2A2A2", // was 400
          400: "#9D9D9E", // was 300
          500: "#7C7C7C", // Added - mid gray
          600: "#5C5C5C", // was 100
          700: "#454545", // Added - between 600 and 800
          800: "#353535", // was 600
          900: "#2D2D2D", // was 800
        },

        //old
        "exp-gray": {
          100: "#5C5C5C",
          200: "#2D2D2D",
          300: "#9D9D9E",
          600: "#353535",
        },
        "custom-black": "#0F0F0F",
        "custom-white": "#F3F1EA",
        "custom-purple": "#9D87D9",
        "custom-dark-purple": "#4c4462",
        "footer-purple": "#2B1B57",
        "copyright-purple": "#8374b8",
        "custom-gray": "#a2a2a2",
        "custom-dark-gray": "#7a7a7a",
        "custom-btn-gray": "#2e2e2e",
        "background-black": "#171717",
        "form-background": "#2d2d2d",
        "footer-border": "#423171",
        //carousel

        "somos-text": "#1B160B",
        "somos-bg": "#F8B23C",

        "slimes-text": "#2C2524",
        "slimes-bg": "#F6EFD3",

        "robbie-bg": "#BABABA",
        "robbie-text": "#1C1C1C",

        "calder-text": "#511F23",
        "calder-bg": "#EDD1D3",

        "andy-text": "#fff",
        "andy-bg": "#33684B",

        "zen0-text": "#1A3A46",
        "zen0-bg": "#75FBC6",

        "sike-text": "#EFB41C",
        "sike-bg": "",

        "folio-text": "#2C2524",
        "folio-bg": "#FF9F72",
      },
      screens: {
        "2xs": "320px",
        xs: "420px",
        s: "1440px",
        1920: "1920px",
        2010: "2010px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
