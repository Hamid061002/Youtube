/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'hover-small-icon': 'rgba(255, 255, 255, 0.2);'
        ,'hover-down-item': '#616161'
      }
      
    },
  },
  plugins: [],
}

