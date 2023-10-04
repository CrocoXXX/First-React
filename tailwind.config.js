/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"]
      }, //end of fontFamily
      colors: {
        'whiteCustom': '#e3e9ee',
        'grayCustom': '#acaeb2',
        'gray1Custom': '#b1b1b1'
      }
    },
  },
  plugins: [],
}

