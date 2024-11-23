/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
    container: { center: true, padding: "1rem" },
  },
  plugins: [require("daisyui")],
};
