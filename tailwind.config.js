/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hover-small-icon': 'rgba(255, 255, 255, 0.2);',
        'hover-down-item': '#616161',
        'border': 'hsl(0, 0%, 18.82%);',
        'first-color':'#888784',
        'second-color':'#222222'
      },
      width: {
        'logo': '90px'
      }
    },
  },
  plugins: [],
}

