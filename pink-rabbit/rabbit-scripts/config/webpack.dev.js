const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./paths");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: paths.outPutPath,
    port: 8080,
  },
  optimization: {
    runtimeChunk: "single",
  },
});
