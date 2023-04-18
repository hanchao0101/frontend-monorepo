The component of command line
pnpm [command] [options] [arguments]
pnpm install
pnpm add jquery
pnpm add jquery --workspace-root
pnpm add jquery -w
pnpm add jquery --filter=workspaceA
pnpm add jquery --filter workspaceA

1.build
pnpm build
2.link
pnpm link ./
3.test
pnpm tc list

1.在开发包中pnpm link --global将当前包link到全局node_modules中
2.在常规项目中pnpm link --global @xxx 即可 【这里的 @xxx一定是开发包中的package.json中的name】