const path = require("path");
const appRoot = require("app-root-path");
const killPort = require("kill-port");
const config = require("./config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const webpackCommon = require("./webpack.common.js");

module.exports = () => {
  killPort(config.devServerPort);

  setTimeout(() => console.log("Starting the development server"), 30000);
  return merge(webpackCommon, {
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        ...config.commonHtmlWebpackPlugin,
        title: "Net6SpaTemplate",
        alwaysWriteToDisk: true,
      }),
      new HtmlWebpackHarddiskPlugin(),
    ],
    devtool: "inline-source-map",
    stats: {
      errorDetails: true,
    },
    devServer: {
      static: {
        directory: path.resolve(appRoot.toString(), "wwwroot"),
      },
      allowedHosts: "all",
      compress: true,
      server: "https",
      port: config.devServerPort,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },

    output: {
      path: path.resolve(appRoot.toString(), "wwwroot"),
      filename: "js/[name].bundle.js",
      publicPath: config.publicPath,
    },
  });
};
