const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    screens:{
      "xs":"520px",
      ...defaultTheme.screens,
    },
    extends:{
      backgroundImage: {
        'bg-image': "url('/pexels.png')",
        'bg-lg-image': "url('/pexels-lg.png')",
        'bg-md-image': "url('/pexels-md.png')",
        'bg-sm-image': "url('/casual-sm.png')",
        'bg-about-image': "url('/pexels-about.png')"
      }
    }
},
  plugins: [],
}
