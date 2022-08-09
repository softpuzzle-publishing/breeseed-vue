const path = require("path");
const EnvConstants = require("./src/constants/env_constants");

for (const [key, value] of Object.entries(EnvConstants)) {
  process.env["VUE_APP_" + key] = value;
}

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8090,
    public: "0.0.0.0:8090"
  },
  publicPath: "/",
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .options({
        transformToRequire: {
          video: ["src", "poster"],
          source: "src",
          img: "src",
          image: "xlink:href"
        }
      }),
      config.module
        .rule("html")
        .test(/\.html$/)
        .use("html-loader")
        .loader("html-loader");
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(
          __dirname,
          "./src/assets/styles/abstracts/_variables.scss"
        ),
        path.resolve(
          __dirname,
          "./src/assets/styles/vendors/bootstrap/_functions.scss"
        ),
        path.resolve(
          __dirname,
          "./src/assets/styles/vendors/bootstrap/_variables.scss"
        ),
        path.resolve(
          __dirname,
          "./src/assets/styles/vendors/bootstrap/_mixins.scss"
        )
      ]
    }
  }
};
