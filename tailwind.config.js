/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx,ts}",
    "./app/**/*.{js,jsx,tsx,ts}",
    "./components/**/*.{js,jsx,tsx,ts}",
  ],

  theme: {
    extend: {
      keyframes: {
        zoomReset: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        zoomReset: "zoomReset 6s linear forwards",
      },
    },
  },
  plugins: [],
};
