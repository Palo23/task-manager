/** @type {import('tailwindcss').Config} */
import { colors, fonts } from './src/styles';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: fonts,
    },
  },
  plugins: [],
};
