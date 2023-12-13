const ora = require("ora");
const chalk = require('chalk')
const fs = require("fs-extra");
const path = require("path")
const spawn = require('cross-spawn')
const os = require('os');


// 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    // 执行传入方法 fn
    const result = await fn(...args);
    // 状态为修改为成功
    spinner.succeed();
    return result;
  } catch (error) {
    // 状态为修改为失败
    spinner.fail("Request failed, refetch ...");
  }
}

class Generator {
  constructor(name, targetDir) {
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;
  }

  async downloadTemplate() {
    console.log("===__dirname=====",__dirname);
    const sourceDir = path.resolve(__dirname, "../react-template");
    console.log("===sourceDir=====",sourceDir);
    const targetDir = this.targetDir
    // fs.copy(sourceDir, targetDir)
    await wrapLoading(
      fs.copy, // 异步copy方法
      "waiting download source", // 加载提示信息
      sourceDir, // 参数1: 下载地址
      targetDir // 参数2: 创建位置
    );
  }

  downloadDependencies() {
    // 定义需要按照的依赖
    const dependencies = ["react", "react-dom","rabbit-scripts"];
    const targetDir = this.targetDir;
    const appName = this.name;
    // 执行安装
    const child = spawn("npm", ["install", "-save"].concat(dependencies), {
      cwd:targetDir,
      stdio: "inherit",
    });
    child.on("close", function (code) {
      // 执行失败
      if (code !== 0) {
        console.log(chalk.red("Error occurred while installing dependencies!"));
        process.exit(1);
      }
      // 执行成功
      else {
        const appPackage = require(path.join(targetDir, 'package.json'));
        appPackage.name = appName;
        appPackage.scripts= {
          dev: "rabbit-scripts start",
          build: "rabbit-scripts build",
        }
        fs.writeFileSync(
          path.join(targetDir, 'package.json'),
          JSON.stringify(appPackage, null, 2) + os.EOL
        )
        console.log(chalk.cyan("Install finished"));
        console.log(`\r\nSuccessfully created project ${chalk.cyan(appName)}`);
        console.log(`\r\n  cd ${chalk.cyan(appName)}`);
        console.log("  npm run dev\r\n");
      }
    });
  }

  // 核心创建逻辑
  async create() {
    await this.downloadTemplate();
     this.downloadDependencies()
    // const appPackage = require(path.join(this.targetDir, 'package.json'));
    // console.log("====appPackage===",appPackage);
    //     appPackage.name=this.name
    //     appPackage.scripts= {
    //       start: "rabbit-scripts start",
    //       build: "rabbit-scripts build",
    //     }
    //     fs.writeFileSync(
    //       path.join(this.targetDir, 'package.json'),
    //       JSON.stringify(appPackage, null, 2) + os.EOL
    //     )
    
  }
}

module.exports = Generator;
