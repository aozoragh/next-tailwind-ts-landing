/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  important : true,
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/assets/images/landing.png')"
      },
      colors: {
        "black-blue" : "#0A0A24"
      }
    },
    fontFamily: {
      Allura: "Allura",
      RoundArial : "RoundArial"
    }
  },
  plugins: [],
}
