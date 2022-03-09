const path = require("path");
const appRoot = require("app-root-path");

module.exports = {
  devServerPort: 8080,

  publicPath: `https://localhost:8080/`,

  extensions: [".ts", ".tsx", ".js", ".jsx"],

  commonHtmlWebpackPlugin: {
    filename: path.join(`${appRoot}`, "Views", "Shared", "_Layout.cshtml"),
    template: path.join(
      `${appRoot}`,
      "Views",
      "Templates",
      "_Layout_Template.cshtml"
    ),
    inject: false,
  },
};
