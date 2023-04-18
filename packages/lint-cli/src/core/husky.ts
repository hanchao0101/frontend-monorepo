import path from "path";
import fs from "fs";
import { runSyc } from "../utils";

const huskyInit = () => {
  runSyc("pnpm add husky -D");
  runSyc("husky install");
  runSyc('npm set-script prepare "husky install"');
  const commitMsgPath = path.resolve(process.cwd(), "./.husky/commit-msg");
  if (fs.existsSync(commitMsgPath)) {
    fs.unlinkSync(commitMsgPath);
  }
  runSyc('husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"');
  const preCommitPath = path.resolve(process.cwd(), "./.husky/pre-commit");
  if (fs.existsSync(preCommitPath)) {
    fs.unlinkSync(preCommitPath);
  }
  runSyc('husky add .husky/pre-commit "npx lint-staged"');
};

export default huskyInit;
