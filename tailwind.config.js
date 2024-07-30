/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      fig:['Figtree','sans-serif'],
      urban:["Urbanist",'sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

