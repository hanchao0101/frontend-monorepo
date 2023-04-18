git hook
    pre-commit
    commit-msg
problem: 
git can't track files under .git/hooks
Now,we can specify hook path by git core.hooksPath
But we need to specify its value manually
husky can help us do it

husky
1.pnpm add husky -D
2.npx husky install
 2.1 .husky.sh
 2.2 set git core.hooksPath
3.npm set-script prepare "husky install"
4.npx husky add .husky/${hook_name} ${command}
 4.1 npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
 4.2 npx husky add .husky/pre-commit "npx lint-staged" //double qoute