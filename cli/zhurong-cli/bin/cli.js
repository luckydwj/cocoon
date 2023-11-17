#! /usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const figlet = require("figlet");

program
    .command('create <app-name>')
    .description("create a new project")
    .option('-f,--force', 'overwrite target directory if it exist')
    .action((name, options) => { 
        // console.log('name:',name,'options:',options)
        require('./create.js')(name,options)
    })

program
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')


  program
  // 监听 --help 执行
    .on('--help', () => {
      // 使用 figlet 绘制 Logo
      console.log('\r\n' + figlet.textSync('zhurong', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      }));
  
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`zr <command> --help`)} for detailed usage of given command\r\n`)
  })

program.parse(process.argv)  
