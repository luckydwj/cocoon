const paths = require("./paths");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: paths.outPutPath,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
    },
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
};
