const ora = require("ora");
const chalk =require('chalk')

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
    // 对 download-git-repo 进行 promise 化改造
  }

  // 下载远程模板
  // 1）拼接下载地址
  // 2）调用下载方法
  async download() {
    // 2）调用下载方法
    // await wrapLoading(
    //   this.downloadGitRepo, // 远程下载方法
    //   "waiting download template", // 加载提示信息
    //   requestUrl, // 参数1: 下载地址
    //   path.resolve(process.cwd(), this.targetDir) // 参数2: 创建位置
    // );
    console.log("=====download====");
    // 1、安装webpack打包工具 根据用户选择安装对应的技术栈
  }

  // 核心创建逻辑
  async create() {
    await this.download();
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`);
    console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
    console.log("  npm run dev\r\n");
  }
}

module.exports = Generator;
