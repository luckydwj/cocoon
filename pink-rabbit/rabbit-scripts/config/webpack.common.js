const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: paths.outPutPath,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.publicPath,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /(node_modules)/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        chunks: "all",
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
