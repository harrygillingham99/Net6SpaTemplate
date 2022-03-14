const path = require("path");
const appRoot = require("app-root-path");
const killPort = require("kill-port");
const config = require("./config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackCommon = require("./webpack.common.js");
const { webpack } = require("webpack");

module.exports = async ({ dev_server }) => {
  dev_server && (await killPort(config.devServerPort));
  console.log("Starting the development server");
  return merge(webpackCommon, {
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        ...config.commonHtmlWebpackPlugin,
        title: "Net6SpaTemplate",
        devServer: dev_server ? config.publicPath : false,
      }),
    ],
    devtool: "inline-source-map",
    stats: {
      errorDetails: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/i,
          use: [
            // Creates `style` nodes from JS strings
            { loader: "style-loader" },
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                url: true,
              },
            },
            // Compiles Sass to CSS
            { loader: "sass-loader" },
          ],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.resolve(appRoot.toString(), "wwwroot"),
      },
      allowedHosts: "all",
      compress: true,
      server: "https",
      hot: true,
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
