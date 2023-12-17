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
        defaultBlue: "#4778D3",
        defaultRed: "#D52737",
        defaultGray: "#C2C2C2",
        BlueGray: "#93A6C0",
        Gray: "#7E7E7E",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
