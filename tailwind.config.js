/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"]
      },
      colors: {
        brand: { DEFAULT: "#3b82f6", dark: "#60a5fa" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.2)" }
    },
  },
  plugins: [],
}
