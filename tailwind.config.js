/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBlue: "#336699",
        defaultRed: "#CC3333",
        defaultGray: "#d8d8d8",
        BlueGray: "#93A6C0",
        Gray: "#565d70",
      },
    },
  },
  plugins: [],
});
