const { merge } = require('webpack-merge');
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})
