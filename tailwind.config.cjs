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
          100: "#868686",
          200: "#535353",
          300: "#3a3a3a",
          400: "#252525",
          500: "#1d1d1d",
          600: "#191919",
        }
      }
    },
  },
  plugins: [],
}

