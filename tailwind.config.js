/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Adds a custom primary color
        secondary: '#14171A', // Adds a custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adds a custom font family
      },
      spacing: {
        '128': '32rem', // Adds a custom spacing value
      },
    },
  },
  plugins: [],
}
