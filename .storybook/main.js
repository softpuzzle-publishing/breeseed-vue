const path = require('path');
const EnvConstants = require("../src/constants/env_constants");

let env = {}
for ( const [key, value] of Object.entries( EnvConstants) ) {
  env["VUE_APP_"+ key] = value;
}

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  staticDirs: ['../'],
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: false }
        },
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import '/src/assets/styles/abstracts/variables';
              @import '/src/assets/styles/abstracts/functions';
              @import '/src/assets/styles/abstracts/mixins';
            `
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    }, {
      test: /\.html$/i,
      loader: 'html-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "/src"),
    };

    return config;
  },
  env: (config) => ({
    ...config,
    ...env
  }),
}