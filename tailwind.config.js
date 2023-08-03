/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#3891F0',
        'dark': '#63687A',
      }
    },
  },
  plugins: [],
}

