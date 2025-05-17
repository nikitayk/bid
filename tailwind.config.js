const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#181f2a",
          card: "#232946",
          accent: "#7dd3fc",
          accent2: "#2563eb",
          border: "#28304a",
          table: "#20263a",
          win: "#34d399",
          lose: "#f472b6",
        },
        ...colors,
      },
      fontFamily: {
        orbitron: ["Orbitron", ...fontFamily.sans],
      },
      boxShadow: {
        soft: "0 2px 16px 0 #10162430",
      },
    },
  },
  plugins: [],
};








