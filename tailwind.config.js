module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      color: {
        black : "#161616"

      },
      fontFamily: {
        body: ['Poppins'],
        logo:['Righteous']
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}