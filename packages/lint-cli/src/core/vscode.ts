import path from "path";
import fs from "fs";
import { copyTemplate } from "../utils";

const vscodeInit = () => {
  const dirpath = path.resolve(process.cwd(), "./.vscode");
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
  copyTemplate(
    path.resolve(__dirname, "../template/vscode/extensions.json"),
    path.resolve(process.cwd(), "./.vscode/extensions.json")
  );
  copyTemplate(
    path.resolve(__dirname, "../template/vscode/settings.json"),
    path.resolve(process.cwd(), "./.vscode/settings.json")
  );
};

export default vscodeInit;
