/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Playfair Display', 'serif'],
      'josef': ['Josefin Sans', 'sans-serif']

    },

  },
  plugins: [],
}

