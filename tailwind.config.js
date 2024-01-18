/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue_lightest: '#EDF9FF',
        blue_light: '#B5E7FF',
        blue_dark: '#0E2D5D',
        blue_main: '#006EFF',
        green_light: '#BFE0E2',
        green_dark: '#1A2C32',
        orange: '#FF920A',
        white_background: '#FFFFFF',
      },
      backgroundImage: {
        'hero-img': "url('/src/assets/images/hero-image.png')",
      }
    },
  },
  plugins: [],
};
