pnpm create foo -> npm exec create-foo
pnpm create @usr/foo -> npm exec @usr/create-foo
pnpm create @usr -> npm exec @usr/create

Why:unified code style in the team

Quick start
pnpm create @eslint/config

Manual set up
pnpm add eslint -wD

components
.eslintrc.js TODO
eslint

core concepts
rules：Rules are the core building block of eslint.
plugins: You can create custom rules or use rules that others have created with pulgins.

How to check vue ts tsx jsx
code format and source format by rules

parser、processor、noInlineConfig、reportUnusedDisableDirectives，后面的配置会覆盖前面的配置。
env、globals、parserOptions、settings会进行合并操作，但是在mergeWithoutOverwrite函数中的合并中是进行并集。
rules 是后面的配置优先级高于前面的
基本是以先处理processor，解析获取AST和节点数组，跑runRules

source code => ast tree => rules => fix => code


There are two ways to configure eslint
  configuration comments
  configuration files

eslint extends:
plugin、configs、format、parse

plugin:
rules、processer、configs、environments

extends field:
inside：eslint:recommended、eslint:all
configs：eslint-config-myconfig
plugin：plugin:vue/essential


web-norm
https://github.com/lyh0371/web-norm/blob/master/src/core/commitlint.ts

eslint 
https://zhuanlan.zhihu.com/p/383490441


rules
1.rules field
  1.1 built-in
  1.2 rules from plugin
2.extends
  2.1 eslint:reommended、eslint:all
  2.2 rules from eslint-config
  2.3 rules from eslint-plugin

priority
rules field > extends(behind > head)


parser
vue、ts => ast  
js、jsx => ast
