// const {} = require('@craco/craco');
const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');
const { whenProd } = require('@craco/craco');
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
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: './src/assets/styles/config-theme.scss',
            },
        },
    ],
};
