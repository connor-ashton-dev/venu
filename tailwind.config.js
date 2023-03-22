/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-slate": "#5E6572",
        "theme-cream": "#FFF7EE",
        "theme-blue": "#76CDC2",
        "theme-gold": "#E3c28d"
      }
    },
  },
  plugins: [],
}
