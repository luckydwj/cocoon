#! /usr/bin/env node
const { program } = require("commander");
const figlet = require("figlet");
const chalk = require("chalk");
const create = require("./create");

program
  .command("create <app-name>")
  .description("create a new project")
  .option('-f,--force', 'overwrite target directory if it exist')
  .action((name, options) => {
    create(name,options)
  });

program
  .version(`v${require("../../rabbit-scripts/package.json").version}`)
  .usage("<command> [option]");

program
  // 监听 --help 执行
  .on("--help", () => {
    // 使用 figlet 绘制 Logo
    console.log(
      "\r\n" +
        figlet.textSync("rabbit", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        })
    );

    // 新增说明信息
    console.log(
      `\r\nRun ${chalk.cyan(
        `rabbit scripts <command> --help`
      )} for detailed usage of given command\r\n`
    );
  });

program.parse(process.argv);
