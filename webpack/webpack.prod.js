const path = require("path");
const appRoot = require("app-root-path");
const config = require("./config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      ...config.commonHtmlWebpackPlugin,
      title: "1plus1Loans | Apply for a loan",
      minify: false,
    }),
    new htmlWebpackHarddiskPlugin(),
  ],
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(appRoot.toString(), "wwwroot"),
    filename: "js/[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
});
