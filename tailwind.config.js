/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        punkbg: "#181c2f",
        punkcard: "#232946",
        punkblue: "#00eaff",
        punkpink: "#ff00cc",
        punkpurple: "#8f00ff",
        punkgreen: "#00ff99",
        punktext: "#eaf6fb",
      },
      fontFamily: {
        punk: ['Orbitron', 'Rajdhani', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        punk: "0 0 16px 2px #00eaff80",
      },
    },
  },
  plugins: [],
};







