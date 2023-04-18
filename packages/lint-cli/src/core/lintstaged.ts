import path from "path";
import { runSyc, copyTemplate } from "../utils";

const lintstagedInit = () => {
  runSyc("pnpm add lint-staged -D");
  copyTemplate(
    path.resolve(__dirname, "../template/lintstaged/lint-staged.config.js"),
    path.resolve(process.cwd(), "./lint-staged.config.js")
  );
};
export default lintstagedInit;
