#!/usr/bin/env node

import { Command } from "commander";
import vscodeInit from "./core/vscode";
import gitInit from "./core/git";
import huskyInit from "./core/husky";
import lintstagedInit from "./core/lintstaged";
import commitizenInit from "./core/commitizen";
import commitlintInit from "./core/commitlint";
import eslintInit from "./core/eslint";
import prettierInit from "./core/prettier";
import stylelintInit from "./core/stylelint";
import managerInit from "./core/manager";
import { wraper } from "./utils";

const program = new Command();
program
  .name("lint-cli")
  .description("code lint")
  .version("1.0.0", "-v, --version", "查看当前版本");

program
  .command("init")
  .description("查看所有可用模板")
  .action(async () => {
    await wraper(managerInit, "manager");
    await wraper(vscodeInit, "vscode");
    await wraper(gitInit, "git");
    await wraper(huskyInit, "husky");
    await wraper(lintstagedInit, "lintStaged");
    await wraper(commitizenInit, "commitizen");
    await wraper(commitlintInit, "commitlint");
    await wraper(prettierInit, "prettier");
    await wraper(eslintInit, "eslint");
    await wraper(stylelintInit, "stylelint");
  });

program.parse(process.argv);
