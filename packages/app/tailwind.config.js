/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        140: "40rem",
        156: "50rem",
      },
    },
  },
  plugins: [],
};
