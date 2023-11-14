/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"'],
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
        P1: "#F4F2FD",
        P2: "#7A5AE1",
        P3: "#D0C2FF",
        Y1: "#DCB30D",
        Y2: "#FEF1BA",
        F1: "#FAFAFA",
        F2: "#565D6D",
        B1: "#171A1F",
      },
    },
  },
  plugins: [],
};
