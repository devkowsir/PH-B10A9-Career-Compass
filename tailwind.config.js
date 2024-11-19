/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
    container: { center: true },
  },
  plugins: [],
};
