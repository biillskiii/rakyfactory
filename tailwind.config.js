/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        "100": 100,
        "200": 200,
        "300": 300,
        "400": 400,
        "500": 500,
        "600": 600,
        "700": 700,
        "800": 800,
      },
      colors: {
        P1: "#F4F2FD",
        P2: "#7A5AE1",
        P3: "#D0C2FF",
        Y1: "#DCB30D",
        Y2: "#FEF1BA"
      }
    },
  },
  plugins: [],
};
