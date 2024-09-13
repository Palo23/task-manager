/** @type {import('tailwindcss').Config} */
import { colors, fonts } from './src/styles';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'li-gradient': 'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)',
      },
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
