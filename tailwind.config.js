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
      },
      maxWidth: {
        "90%": "90%"
      },
      width : {
        avatar : "237px"
      },
      height : {
        avatar : "230px"
      }
    },
    fontFamily: {
      Allura: "Allura",
      RoundArial : "RoundArial"
    }
  },
  plugins: [],
}
