import path from "path";
import { runSyc, copyTemplate } from "../utils";

const gitInit = () => {
  runSyc("git init");
  copyTemplate(
    path.resolve(__dirname, "../template/git/.gitignore"),
    path.resolve(process.cwd(), "./.gitignore")
  );
};

export default gitInit;
