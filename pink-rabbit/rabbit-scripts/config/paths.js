const path = require('path');
const fs = require("fs");
// 项目的根目录
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appIndexJs: resolveApp("./src/index"),
  outPutPath: resolveApp("./dist"),
};