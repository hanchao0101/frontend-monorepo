https://pnpm.io/

commands
pnpm install
pnpm add <pkg>
pnpm remove <pkg>

options
-w, --workspace-root
-F, --filter

pnpm add @types/chalk @types/inquirer @types/node @types/ora --filter @target1/cli -D
pnpm add @target1/utils@workspace