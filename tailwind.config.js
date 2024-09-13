/** @type {import('tailwindcss').Config} */
import { colors, fonts } from './src/styles';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: fonts,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors,
    },
  },
  plugins: [require('tailwindcss-animate')],
};
