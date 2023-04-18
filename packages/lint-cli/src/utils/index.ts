import child_process from "child_process";
import chalk from "chalk";
import ora from "ora";
import fs from "fs";

export const runSyc = (script: string) => {
  child_process.execSync(script);
};
export const copyTemplate = (src: fs.PathLike, dest: fs.PathLike) => {
  fs.copyFileSync(src, dest);
};

export const spinner = (name: string) => {
  const spinner = ora(chalk.green(`${name}初始化中...`)).start();
  // 换行
  //   console.log('');
  const succeed = () => {
    spinner.succeed(chalk.green(`${name}配置成功`));
  };
  const fail = () => {
    spinner.fail(chalk.red(`${name}初始化失败`));
  };
  return {
    succeed,
    fail,
  };
};

export const wraper = async (fn: () => void, name: string) => {
  const { succeed, fail } = spinner(name);
  try {
    await fn();
    succeed();
  } catch (error) {
    console.error(error);
    fail();
  }
};
