/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-not-last', '& > *:not(:last-child)')
      addVariant('first-child', '& > *:first-child')
      addVariant('child-child', '& > * > *')
      addVariant('child-first-child', '& > * > :first-child')
    }
  ],
};

