const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin").default;
const CopyPlugin = require("copy-webpack-plugin");
const config = require("./config/index");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    app: config.app,
    vendors: config.vendors,
  },
  resolve: {
    plugins: [new TsConfigPathsPlugin({ extensions: config.extensions })],
    extensions: config.extensions,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({ patterns: config.copyOptions.patterns }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  output: {
    assetModuleFilename: "static/[name].[hash:8][ext]",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
