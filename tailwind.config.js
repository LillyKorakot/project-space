/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      'belle': ['Bellefair, serif'],
      'barlow': ['Barlow Condensed, sans-serif'],
      'barlow01': ['Barlow Condensed, serif']
    }
  },
  plugins: [],
}

