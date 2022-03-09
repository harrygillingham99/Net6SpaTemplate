const path = require("path");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin").default;

module.exports = {
  target: "web",
  entry: "./src/scripts/app/index.tsx",
  resolve: {
    plugins: [
      new TsConfigPathsPlugin({extensions: [".ts", ".tsx", ".js", ".jsx"]}),
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
