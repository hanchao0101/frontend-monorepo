import path from "path";
import { runSyc, copyTemplate } from "../utils";

const eslintInit = () => {
  runSyc(
    "pnpm add eslint eslint-define-config vue-eslint-parser @typescript-eslint/parser eslint-plugin-prettier @vue/eslint-config-airbnb @vue/eslint-config-typescript -D"
  );
  copyTemplate(
    path.resolve(__dirname, "../template/eslint/.eslintrc.js"),
    path.resolve(process.cwd(), "./.eslintrc.js")
  );
  copyTemplate(
    path.resolve(__dirname, "../template/eslint/.eslintignore"),
    path.resolve(process.cwd(), "./.eslintignore")
  );
  runSyc('npm set-script eslint "eslint "src/**/*.{vue,ts,tsx,js,jsx}""');
  runSyc('npm set-script eslint:fix "pnpm run eslint -- --fix"');
};

export default eslintInit;
