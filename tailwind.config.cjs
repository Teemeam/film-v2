/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

import safelist from './safelist';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  plugins: [],
  safelist: safelist,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
