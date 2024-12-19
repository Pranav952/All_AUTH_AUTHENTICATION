/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./mysite/templates/**/*.{html,js}",
    "./myapp/templates/**/*.{html,js}",
    "./myapp/**/*.{html,js}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
