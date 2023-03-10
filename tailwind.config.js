/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './views/*.{pug, html}',
    './src/*.js',
    './templates/*.html'

],
  theme: {
    extend: {
      backgroundColor: {
        fMain: '#131219',
        sMain: '#86c288',
        tMain: '#191b1f',
        foMain: '#2b4e34',
        MovieCard: '#262837',
        time: 'rgb(91 93 108 / 42%)',
        loading: 'rgba(0, 0, 0, 0.51)',
        redYoutube: '#ff0000'
      },
      colors: {
        sMain: '#86c288',
        foMain: '#2b4e34',
        grayCustom: '#c7cace',
        grayInfo: '#5c5e6d',
      },
      fontFamily:{
        rubikVinyl : ['RubikVinyl']
      },
      width: {
        cardRow: 'calc(calc(16rem * 4) + 3rem)'
      }
    },
  },
  plugins: [],
}
