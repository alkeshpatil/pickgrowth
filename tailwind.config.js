module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  theme: {

    color: {
      pg: {
        100: "#6C63FF"
      },


      fontFamily: {
        logo: ['Righteous'],
        body: ['Poppins']
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}