/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FFA726",
        accentDark: "#FB8C00",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
