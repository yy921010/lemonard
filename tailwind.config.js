const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
      const aaa = {
        '.rc-dialog-mask':{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#373737',
          backgroundColor:'rgba(55, 55, 55, 0.6)',
          height:'100%',
          filter: 'alpha(opacity=50)',
          zIndex: 1050
        },
        '.rc-dialog':{
          position:'relative',

        }
      }
      addComponents(aaa)
    }),
  ],
}
