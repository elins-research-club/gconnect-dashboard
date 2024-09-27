/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/7': '14.2857143%',
        '1/8': '12.5%',
        '1/10' : '10%',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

