const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin").default;
const config = require("./config");

module.exports = {
  target: "web",
  entry: "./src/scripts/app/index.tsx",
  resolve: {
    plugins: [new TsConfigPathsPlugin({ extensions: config.extensions })],
    extensions: config.extensions,
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
    assetModuleFilename: "static/[name][ext]",
  },
};
