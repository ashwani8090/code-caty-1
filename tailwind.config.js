const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "skyblue",
        secondary: 'yellow',
        success: 'green',
        info: 'blue',
        danger: 'red'
      },
      fontFamily: {
        'sans': ['"Dancing"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

