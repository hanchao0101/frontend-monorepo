import path from "path";
import { runSyc, copyTemplate } from "../utils";

const stylelintInit = () => {
  runSyc(
    "pnpm add postcss postcss-html postcss-less stylelint stylelint-config-recommended-vue stylelint-config-standard -D"
  );
  copyTemplate(
    path.resolve(__dirname, "../template/stylelint/stylelint.config.js"),
    path.resolve(process.cwd(), "./stylelint.config.js")
  );
  runSyc(
    'npm set-script stylelint "stylelint "src/**/*.{css,scss,less,styl,postcss,vue,html}""'
  );
  runSyc('npm set-script stylelint:fix "pnpm run stylelint -- --fix"');
};

export default stylelintInit;
