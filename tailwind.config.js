/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doublecolor: "linear-gradient(-18.5deg, #FEF3C7 41%, #FFFBEB 20%)",
      },
      boxShadow: {
        'white':  '0px 10px 50px -20px rgba(255, 255, 255, 1)', 
      },
    },
  },
  plugins: [],
}