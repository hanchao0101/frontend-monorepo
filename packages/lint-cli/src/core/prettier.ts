import path from "path";
import { runSyc, copyTemplate } from "../utils";

const prettierInit = () => {
  runSyc("pnpm add prettier -D");
  copyTemplate(
    path.resolve(__dirname, "../template/prettier/prettier.config.js"),
    path.resolve(process.cwd(), "./prettier.config.js")
  );
  copyTemplate(
    path.resolve(__dirname, "../template/prettier/.prettierignore"),
    path.resolve(process.cwd(), "./.prettierignore")
  );
  runSyc(
    'npm set-script prettier "prettier --no-editorconfig --config-precedence file-override "src/**/*.{js,ts,json,jsonc,jsx,tsx,css,less,scss,vue,html,md}""'
  );
  runSyc('npm set-script prettier:fix "pnpm run prettier -- --write"');
};

export default prettierInit;
