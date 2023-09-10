/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hover-small-icon': 'rgba(255, 255, 255, 0.2);',
        'hover-down-item': '#616161',
        'border': 'hsl(0, 0%, 18.82%);',
        'first-color': '#888784',
        'second-color': '#222222',
        'body-bg-color': '#0F0F0F',
        'hover-left-icon': '#343434',
        'first-item': '#F1F1F1',
        'navbar': '#272727',
        'white-bg': '#121212',
      },
      width: {
        'logo': '90px',
        'width-72': '72px',
        'width-84': '84px',
        'width-lg-search': '600px',
        'width-545': '545px',
        'width-225': '225px'
      },
      height:{
        74:'74px',
      },
      screens: {
        lg2: '1150px',
        w430: '430px',
        w560: '560px',
        w700: '700px',
        w800: '800px',
        w1315: '1315px'
      },
      fontSize: {
        10: '10px',
        13: '13px'
      }
    },
  },
  plugins: [],
}

