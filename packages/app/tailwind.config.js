/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
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
