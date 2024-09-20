/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.css",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

