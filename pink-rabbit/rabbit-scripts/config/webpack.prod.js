const { merge } = require('webpack-merge');
const common = require('./webpack.common')
module.exports = merge(common, {
  mode: "production",
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
