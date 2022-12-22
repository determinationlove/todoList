/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: [
    './*.html',
    './src/*.css'
],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
