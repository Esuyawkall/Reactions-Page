/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.html', './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        like: {
          '0%, 100%': { transform: 'scale(1)' }, // Start and end at normal size
          '50%': { transform: 'scale(1.5)' }, // Pop at the middle
        },
      },
      animation: {
        like: 'like 0.3s ease-in-out', // Set duration and timing for the animation
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.active': {
          transform: 'translateY(-56px)',
          transition: 'transform 0.3s ease-in-out',
        },
        '#w50': {
          "transition": "width 0.3s ease-in-out", // CSS property in quotes
        },
        '#w51': {
          "transition": "width 0.3s ease-in-out", // CSS property in quotes
        },
        
      };

      // Apply the custom utilities on hover or other states if needed
      addUtilities(newUtilities, ['hover', 'active']);
    }),
  ],
}
