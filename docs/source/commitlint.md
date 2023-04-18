Commit Message Format
<header>
<blank line>
<body>
<blank line>
<footer>

1.header
<type>(<scope>):<subject>
type(必须):提交类型，比如fix、bug、feature
scope:影响范围，比如html、css、javascript、模块、组件
subject(必须):简短描述

2.body
详细描述

3.footer
breaking change
issue

Motivation
unified the format of commit message in team

Element
    person
    git

System

Process
    edit
    commit


https://blog.csdn.net/weixin_33890526/article/details/91393527
https://www.jianshu.com/p/54b048cb8483
https://juejin.cn/post/6976891381914533918

changelog
包管理器限制

https://www.cnblogs.com/dtux/archive/2022/06/28/16419271.html
commitizen
1.pnpm add commitizen -wD
2.npx commitizen init cz-conventional-changelog --save-dev --save-exact --pnpm
 2.1 install cz-conventional-changelog adaper
 2.2 save it to package.json
 2.3 add config.commitizen to package.json
 "config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
 }
3.
 3.1 commitizen get commmit message by adapter template and user input
 3.2 excute "git commit -m 'message'"

策略模式和适配器模式
 1.install
  1.1 pnpm add commitizen -wD
  1.2 specify adapter at .czrc
 2.adapter
  2.1 pnpm add cz-customizable -wD
  2.2 specify config at .cz-config.js

commitlint alias of @commitlin/cli
1.install
 1.1 pnpm add @commitlint/cli -wD
2.hook
 npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
  $1 is the template path of commit message
3.config
 3.1 pnpm add commitlint-config-cz -wD
 3.2 specify config at commitlint.config.js


 https://cloud.tencent.com/developer/article/2143379
