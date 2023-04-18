import { runSyc } from "../utils";

const managerInit = () => {
  runSyc('npm set-script preinstall "npx only-allow pnpm"');
};

export default managerInit;
