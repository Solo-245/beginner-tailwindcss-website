const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'dark-blue': colors.darkBlue,
        'light-green': colors.lightGreen,
      },
    },
  },
  plugins: [],
}


