/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "brown-200": "#d6b08c",
        "brown-700": "#8b4513",
        " primary": "#D1D8C5",
      },
    },
  },
  plugins: [],
};
