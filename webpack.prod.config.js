const merge = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "bundle.[hash].min.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  }
});