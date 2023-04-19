/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  important : true,
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/assets/images/landing.png')",
        profile: "linear-gradient(100.04deg, #2C3267 -2.07%, #0A0C22 100%)",
        "profile-title" : 'linear-gradient(98.06deg, #253673 2.33%, #7A8ED3 82.83%)',
        portfolio1 : "url('/assets/images/portfolio1.png')",
        portfolio2 : "url('/assets/images/portfolio2.png')",
        portfolio3 : "url('/assets/images/portfolio3.png')",
        portfolio4 : "url('/assets/images/portfolio4.png')",

        candoBg : "url('/assets/images/candoBg.jpeg')",
      },
      colors: {
        "black-blue" : "#0A0A24",
        navbar : "rgba(255, 255, 255, 0.8)",
        mask : "rgba(0, 0, 0, 0.5)",
      },
      boxShadow : {
        profile : "20px 9px 30px -3px rgba(255, 255, 255, 0.38)",
        "profile-title" : "5px 4px 10px rgba(255, 255, 255, 0.25)"
      }
    },
    fontFamily: {
      Allura: "Allura",
      RoundArial : "RoundArial"
    }
  },
  plugins: [],
}
