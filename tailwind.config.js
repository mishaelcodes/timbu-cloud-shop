/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timbuBlack: "#1c1d1e",
        timbuBlue: "#0ABAB5",
        timbuWhite: "#FDFDFD",
        timbuRed: "#9C0A0A",
        timbuGrey: "#EDECEC"
      },
      fontWeight: {
        regular: "400",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
