const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        bgimage: "url('../../public/bgimg.png')",
      },
      fontFamily: {
        IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      spacing: {
        128: "32rem",
        140: "40rem",
        156: "50rem",
      },
    },
  },
  plugins: [],
};
