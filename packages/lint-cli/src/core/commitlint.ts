import path from "path";
import { runSyc, copyTemplate } from "../utils";

const commitlintInit = () => {
  runSyc("pnpm add @commitlint/cli commitlint-config-cz -D");
  copyTemplate(
    path.resolve(__dirname, "../template/commitlint/commitlint.config.js"),
    path.resolve(process.cwd(), "./commitlint.config.js")
  );
};

export default commitlintInit;
