/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        defaultBlue: "#336699",
        defaultRed: "#CC3333",
        defaultGray: "#333333",
        BlueGray: "#93A6C0",
        Gray: "#565d70",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
