const path = require('path');
const {whenProd} = require('@craco/craco');
const { createMockMiddleware } = require("umi-mock-middleware");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins:[new ProgressBarPlugin({
      complete:"█"
    })]
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
  devServer:{
    port: 8080,
    before:app=>{
      if (process.env.DEV_MODE === 'mock') {
        app.use(createMockMiddleware());
      }
    },
    proxy:{
      [process.env.PROXY_API_PREFIX]: {
        target: process.env.DEV_MODE === 'mock'
          ? `http://127.0.0.1:8080/`
          : `https://api.lemonnard.com/graphql`,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^' + process.env.PROXY_API_PREFIX]: ''
        }
      }
    }
  }
};
