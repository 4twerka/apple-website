/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-custom-purple": "#3946AF",
        "light-custom-purple": "#5F70FF"
      }
    },
  },
  plugins: [],
}

