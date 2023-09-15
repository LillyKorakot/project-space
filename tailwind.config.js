/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      belle: ["Bellefair, serif"],
      barlow: ["Barlow Condensed, sans-serif"],
      barlowC: ["Barlow Condensed"],
      bellesans: ["Bellefair, sans-serif"],
    }
  },
  plugins: [],
}

