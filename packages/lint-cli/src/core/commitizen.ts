import path from "path";
import { runSyc, copyTemplate } from "../utils";

const commitizenInit = () => {
  runSyc("pnpm add commitizen cz-customizable -D");
  copyTemplate(
    path.resolve(__dirname, "../template/commitizen/.cz-config.js"),
    path.resolve(process.cwd(), "./.cz-config.js")
  );
  copyTemplate(
    path.resolve(__dirname, "../template/commitizen/.czrc"),
    path.resolve(process.cwd(), "./.czrc")
  );
  runSyc('npm set-script commit "cz"');
};

export default commitizenInit;
