/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"'],
        bevietnampro: ["Be Vietnam Pro"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        P1: "#7A5AE1",
        P2: "#F3EFFF",
        Y1: "#959494",
        T1: "#787878",
      },
    },
  },
  plugins: [],
};
