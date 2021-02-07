// const {} = require('@craco/craco');
const path = require('path');
const {whenProd} = require('@craco/craco');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ...whenProd(() => {
            return {
              displayName: false,
            };
          }),
        },
      ],
    ],
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  },
  plugins: [],
};
