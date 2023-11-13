/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        P1: "#F4F2FD",
        P2: "#7A5AE1",
        P3: "#D0C2FF",
        Y1: "#DCB30D",
        Y2: "#FEF1BA",
        F1: "#FAFAFA",
        F2: "#565D6D"
      }
    },
  },
  plugins: [],
};
