const ora = require("ora");
const chalk = require('chalk')
const fs = require("fs-extra");
const path = require("path")
const spawn = require('cross-spawn')
// const {spawn } =require('child_process')


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
    const sourceDir = path.resolve(process.cwd(), "react-template");
    console.log("===process.cwd()====", sourceDir);
    const targetDir = path.resolve(process.cwd(), this.targetDir);
    // fs.copy(sourceDir, targetDir)
    await wrapLoading(
      fs.copy, // 异步copy方法
      "waiting download template", // 加载提示信息
      sourceDir, // 参数1: 下载地址
      targetDir // 参数2: 创建位置
    );
  }

  downloadDependencies() {
    // 定义需要按照的依赖
    const dependencies = ["react", "react-dom"];
    const targetDir = path.resolve(process.cwd(), this.targetDir);
    // 执行安装
    const child = spawn("npm", ["install", "-D"].concat(dependencies), {
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
        console.log(chalk.cyan("Install finished"));
      }
    });
  }

  cdTargeDir() {
    const targetDir = path.resolve(process.cwd(), this.targetDir);
    // console.log("===cdTargeDir=====",process);
    // exec(`cd ${targetDir}`)
    // exec("ls")
    // const child = spawn("cd", [targetDir]);
    // child.on("close", (data) => {
    //   console.log("===close======", data);
    //   this.downloadDependencies()
    // });
    // child.on("error", (error) => {
    //   console.log("===error======", error);
    // });
    
    // child.on("exit", (code,signal) => {
    //   console.log(`c333hild process exited with code ${code} and signal ${signal}`);
    // });
    // const child = spawn(
    //   targetDir,
    //   [...args, '-e', source, '--', JSON.stringify(data)],
    //   { cwd, stdio: 'inherit' }
    // );
  
  }

  // 核心创建逻辑
  async create() {
    //1、 下载模版
    await this.downloadTemplate();
    this.downloadDependencies()
    // 2、进入到模版路径

    // this.cdTargeDir();
    //3、执行npm install

    //  await wrapLoading(
    //   this.downloadDependencies, // 异步copy方法
    //   "waiting download template", // 加载提示信息
    // );
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`);
    console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
    console.log("  npm run dev\r\n");
  }
}

module.exports = Generator;
