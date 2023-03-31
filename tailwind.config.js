/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "nile-blue": {
        50: "#f2f8fd",
        100: "#e4f0fa",
        200: "#c4e0f3",
        300: "#90c7e9",
        400: "#54aadc",
        500: "#2e90c9",
        600: "#1f73aa",
        700: "#1a5c8a",
        800: "#194e73",
        900: "#193f5b",
        950: "#112a40",
      },
    },
    extend: {},
  },
  plugins: [],
};
