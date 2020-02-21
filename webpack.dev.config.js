const merge = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  }
});
