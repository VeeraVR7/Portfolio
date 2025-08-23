/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'primary':'#0a0f1c',
        'secondary':'#0a0f1c'
      }
    },
    fontFamily :{
      'mon-font':'Montserrat'
    }
  },
  plugins: [],
}

