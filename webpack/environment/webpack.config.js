const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    clean: true,
    library: {
        name: 'webpackNumbers',
        type: 'umd',
      },
    },
    externals: {
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_',
        },
    },
    // externals: [
    //     'library/one',
    //     'library/two',
    //     // 匹配以 "library/" 开始的所有依赖
    //     /^library\/.+$/,
    //   ],
};