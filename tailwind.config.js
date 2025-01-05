/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,assets}"],
  theme: {
    extend: {},
    fontFamily: {
      kanit: ["Kanit", 'serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

