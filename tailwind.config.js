/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-900": "#383F50",
        "black-900": "#16222D",
        "orange-900": "#FF8049",
      },
    },
  },
  plugins: [],
};
