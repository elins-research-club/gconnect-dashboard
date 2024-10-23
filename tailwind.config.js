/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      height: {
        '1/7': '14.2857143%',
        '1/8': '12.5%',
        '1/10': '10%',
        '12/100' : '12%',
        '22/100' : '22%',
        '88/100': '88%',
        '9/10' : '90%',
        '95/100' : '95%',
      },
      width: {
        '1/20': '5%',
        '7/10' : '70%',
        '6/10' : '60%',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl' : '3rem',
      },
      backgroundColor: {
        'E5E5E5': '#E5E5E5'
      }
    },
  },
  plugins: [],
}

