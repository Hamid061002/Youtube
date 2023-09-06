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
        'second-color':'#222222',
        'body-bg-color': '#0F0F0F',
        'hover-left-icon': '#343434',
        'first-item': '#F1F1F1'
      },
      width: {
        'logo': '90px',
        'width-lg-search': '600px',
        'width-518': '518px',
      },
      screens:{
        lg2:'1150px',
        w430: '430px',
        w560: '560px',
        w700: '700px'
      }
    },
  },
  plugins: [],
}

