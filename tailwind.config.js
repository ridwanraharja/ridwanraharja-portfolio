/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pockota", "sans-serif"],
        pockota: ["Pockota", "sans-serif"],
      },
    },
  },
  plugins: [],
};
