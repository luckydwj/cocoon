const webpack = require("webpack");
const config = require("../config/webpack.prod.js");
const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
  
  compiler.close((closeErr) => {
    if (closeErr) {
      console.error(closeErr);
    } else {
      console.log(
        stats.toString({
          chunks: true, // 使构建过程更静默无输出
          colors: true, // 在控制台展示颜色
        })
      );
    }
  });
});
