/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: "8px",
    },
    colors: {
      green: "#34a853",
      black: "#000000",
      white: "#ffffff",
      grayBorder: "#dadada",
    },
  },
  plugins: [],
};
