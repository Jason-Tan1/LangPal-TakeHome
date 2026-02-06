/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7043',
          yellow: '#FFD54F',
          primary: '#FF5722',
          surface: '#FFFFFF',
          bg: '#FFF3E0',
          text: '#4E342E',
          textLight: '#8D6E63',
        }
      }
    },
  },
  plugins: [],
}
