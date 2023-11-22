const path = require('path');
const fs = require("fs");

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// 项目的根目录
const appDirectory = fs.realpathSync(process.cwd());

module.exports= { 
    appIndexJs:resolveApp(appDirectory,'/src/index')
}