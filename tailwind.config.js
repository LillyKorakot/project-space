/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      belle: ["bellefair"],
      barlow: ["Barlow Condensed, sans-serif"],
      barlowC: ["Barlow Condensed"],
      bellesans: ["Bellefair, sans-serif"],
    },
    backgroundImage: {
      crew_desktop: "url('./assets/crew/background-crew-desktop.jpg')",
      crew_tablet: "url('./assets/crew/background-crew-tablet.jpg')",
      crew_mobile: "url('./assets/crew/background-crew-mobile.jpg')",
      home_desktop: "url('./assets/Home/background-home-desktop.jpg')",
      home_tablet: "url('./assets/Home/background-home-tablet.jpg')",
      home_mobile: "url('./assets/Home/background-home-moblie.jpg')",
    },
  },
  plugins: [],
};
