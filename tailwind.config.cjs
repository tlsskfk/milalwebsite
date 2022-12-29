/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffe6e6",
        bluePrimary: "#10559A",
        secondary: "rgb( 120, 53, 15 )", //brown
        tertiary: "rgb(54, 83, 20)",//green
        terracotta: "#ED6A5A",
        dimColor0: "#64B1D4",//purp
        dimColor1: "#A6D2A5", //lightgreen
        pRed: "#ffb3ba",
        pOrange: "#ffdfba",
        pYellow: "#ffffba",
        pGreen: "#baffc9",
        pBlue: "#bae1ff",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'reverse-pulse' : 'pulse 2s cubic-bezier(0.4, 0, 0.6) infinite'
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: .5
          },
          '0%, 100%': {
            opacity: 1
          },
        }
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};