/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#84cc16",
        secondary: "#6b7280",
        limes: "#365314",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
