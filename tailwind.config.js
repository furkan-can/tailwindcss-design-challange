/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doublecolor: "linear-gradient(-24deg, #FEF3C7 43%, #FFFBEB 20%)",
      }
    },
  },
  plugins: [],
}