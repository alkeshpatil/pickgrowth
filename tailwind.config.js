module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins'],
        'logo': ['Righteous']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}