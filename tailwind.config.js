import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#6C63FF",
      },
      keyframes: {
        'border-beam-circular': {
          '0%': { borderColor: 'transparent transparent transparent indigo' },
          '25%': { borderColor: 'indigo transparent transparent transparent' },
          '50%': { borderColor: 'transparent indigo transparent transparent' },
          '75%': { borderColor: 'transparent transparent indigo transparent' },
          '100%': { borderColor: 'transparent transparent transparent indigo' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'border-beam-circular': 'border-beam-circular 4s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
}