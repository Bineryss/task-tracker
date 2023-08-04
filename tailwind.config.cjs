/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue"
  ],
  daisyui: {
    themes: ["dark"]
  },
  plugins: [require("daisyui")],
}

