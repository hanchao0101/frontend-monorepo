#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import chalk from "chalk";
import ora from "ora";
import inquirer from "inquirer";
import child_process from "child_process";
// import download from 'download-git-repo';
// import packageJson from '../package.json';
// const version = require('../package.json').version;
// template-cli -h                              查看脚手架配置项和具体功能
// template-cli -v                              查看脚手架版本
// template-cli list                            查看脚手架模板列表
// template-cli init -u 模板路径 -n 项目名       初始化项目模板

interface Template {
  name: string;
  value: string;
  projectName: string;
  url: string;
  short: string;
}

// 交互选择模板
async function selectTemplate(): Promise<Template> {
  const choices: Template[] = [
    {
      name: "服务魔方子项目模板",
      value: "csc",
      projectName: "csc-template",
      url: "https://gitee.com/hanchao0101/iview.git",
      short: "服务魔方子项目模板",
    },
    {
      name: "vue项目模板",
      value: "vue",
      projectName: "vue-template",
      url: "https://gitee.com/hanchao0101/iview.git",
      short: "vue项目模板",
    },
    {
      name: "react项目模板",
      value: "react",
      projectName: "react-template",
      url: "https://gitee.com/hanchao0101/iview.git",
      short: "react项目模板",
    },
  ];
  const res = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "请选择项目模板",
      default: "",
      choices,
    },
  ]);
  const { template } = res;
  const templateObj: Template =
    choices.find((item) => item.value === template) || choices[0];
  return templateObj;
}

// 交互修改package.json文件字段
const modifyPackageJson = (dirName: string) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "请输入项目名称",
        default: dirName,
      },
      {
        type: "input",
        name: "description",
        message: "请输入项目简介",
        default: "",
      },
      {
        type: "input",
        name: "author",
        message: "请输入作者名称",
        default: "",
      },
    ])
    .then((answers) => {
      const jsonUrl = `${dirName}/package.json`;
      fs.readFile(jsonUrl, "utf-8", (err, data) => {
        if (err) {
          console.log(chalk.red("读取配置失败"));
          return;
        }
        let packageJSON = JSON.parse(data);
        Object.assign(packageJSON, answers);
        packageJSON = JSON.stringify(packageJSON, null, 4);
        fs.writeFile(jsonUrl, packageJSON, "utf-8", (err) => {
          if (err) {
            console.log(chalk.red("修改配置失败"));
            return;
          }
          console.log(chalk.green("项目初始化成功"));
        });
      });
    });
};

const program = new Command();
program
  .name("template-cli")
  .description("模板项目下载")
  .version("1.0.0", "-v, --version", "查看当前版本");

program
  .command("list")
  .description("查看所有可用模板")
  .action(() => {
    console.log(`${chalk.green("1. 子项目模板")}`);
  });

program
  .command("init")
  .option("-u, --url <projectUrl>", "模板路径")
  .option("-n, --name <projectName>", "项目名称")
  .description("项目初始化")
  .action(async (options) => {
    const { url, name } = options;

    // 选择模板
    const templateObj: Template = await selectTemplate();

    // 下载路径及项目名称
    const projectUrl = url || templateObj.url;
    const dirName = name || templateObj.projectName;

    // 下载模板
    const spinner = ora(`${chalk.green("正在下载模板...")}`).start();
    // 换行
    console.log("");
    try {
      child_process.execSync(`git clone ${projectUrl} ${dirName}`);
      spinner.succeed(chalk.green("下载模板成功"));
    } catch (error) {
      spinner.fail(chalk.red("下载模板出错"));
    }

    // 修改package.json
    modifyPackageJson(dirName);
  });
program.parse(process.argv);
