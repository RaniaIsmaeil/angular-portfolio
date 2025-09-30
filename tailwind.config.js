/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"]
      },
      colors: {
        brand: { DEFAULT: "#6366f1", dark: "#8b5cf6" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" }
    },
  },
  plugins: [],
}
