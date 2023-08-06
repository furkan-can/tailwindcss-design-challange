/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '50': '50deg',
      },
      screens: {
        'iphone': {'max' : '390px'}
      },
      backgroundImage: {
        doublecolor: "linear-gradient(-21deg, #FEF3C7 43%, #FFFBEB 20%)",
      },
      boxShadow: {
        'white':  '0px 10px 50px -20px rgba(255, 255, 255, 1)', 
      },
    },
  },
  plugins: [],
}