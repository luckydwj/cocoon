const webpack = require("webpack");
const config = require("../config/webpack.config");
config()
// const compiler = webpack(config);
// compiler.run((err, stats) => {
//   if (err) {
//     console.error(err.stack || err);
//     if (err.details) {
//       console.error(err.details);
//     }
//     return;
//   }
//   const info = stats.toJson();

//   if (stats.hasErrors()) {
//     console.error(info.errors);
//   }

//   if (stats.hasWarnings()) {
//     console.warn(info.warnings);
//   }

//   compiler.close((closeErr) => {
//     console.error(closeErr);
//   });
// });
