const path = require('path');
const { whenProd } = require('@craco/craco');
const WebpackBar = require('webpackbar');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        plugins: [new WebpackBar()],
    },
    babel: {
        plugins: [],
    },
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    plugins: [],
    devServer: {
        port: 8080,
    },
};
