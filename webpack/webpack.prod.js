const path = require("path");
const appRoot = require("app-root-path");
const config = require("./config");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DefinePlugin = webpack.DefinePlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon, {
  mode: "production",
  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].min.css",
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      ...config.commonHtmlWebpackPlugin,
      title: "Net6SpaTemplate",
      minify: false,
    }),
  ],
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  output: {
    path: path.resolve(appRoot.toString(), "wwwroot"),
    filename: "js/[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
});
