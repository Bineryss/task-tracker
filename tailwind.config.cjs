/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        "primary-dark": "#535bf2",
        base: {
          100: "#d0d0d0",
          200: "#242424",
          300: "#1a1a1a"
        }
      }
    },
  },
  plugins: [],
}

