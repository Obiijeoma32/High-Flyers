/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: "'Inter', sans-serif;",
    },
    screens: {
      100: "100px",
      mobile: "300px",
      phone: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1350px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1900px",
      "5xl": "2100px",
    },
  },
  plugins: [],
};
