# realworld-api
node express mongoose morgan cors express-validator

# mongoose
官网地址：https://mongoosejs.com/


# eslint husky commitlint lint-staged
逐一的安装与使用
# eslint
执行`npm init @eslint/config`对eslint进行安装
整个过程可能包含的提问如下:
1. How would you like to use ESLint? · To check syntax, find problems, and enforce code style  (选择如何使用 ESLint,检查语法、找出问题和强制执行代码风格)
2. What type of modules does your project use? · None of these, I have a custom setup (选择项目使用的模块类型,这里选自定义设置)
3. Which framework does your project use? · None of these (选择项目使用的框架,这里选无)
4. Does your project use TypeScript? · No (项目是否使用 TypeScript,这里选择不使用)
5. What format do you want your config file to be in? · JavaScript (配置文件格式选择 JavaScript)
6. Would you like to install eslint-config-airbnb with their stylistic rules? · No (是否安装并使用 eslint-config-airbnb 提供的风格规则,这里选择是)
7. What is the path of the config file to create relative to the current folder? · .eslintrc.js (配置文件路径,这里选择当前文件夹下的 .eslintrc.js)

以上选择请根据实际情况进行选择

安装完成之后，根目录下会出现`.eslintrc.js`文件

基本配置如下：
```
module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: 'standard',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'warn',
        indent: ['error', 4],
        semi: ['error', 'always'],
    },
};
```

# githooks的相关解释
| git hook | 执行时机 | 说明 |
| ------------- | ------------- | ------------- |
| applypatch-msg | git am 执行前 | 默认情况下，如果commit-msg启用的话，applpatch-msg钩子在启用时会运行commit-msg钩子 |
| pre-applypatc	| git am 执行前 | 默认的pre-applypatch钩子在启用时运行pre-commit钩子（如果后者已启用 |
| post-applypatch | git am 执行后 | 这个钩子主要用于通知，不能影响git-am的结果 |
| pre-commit | git commit 执行前 | 可以使用 git commit --no verify 命令绕过该钩子 |
| pre-merge-commit | git merge 执行前 | 可以使用 git merge --no verify 命令绕过该钩子 |
| prepare-commit-msg | git commit执行之后，编辑器打开之前 |  |
| commit-msg | git commit 执行前 | 可以使用 git commit --no verify 命令绕过该钩子 |
| post-commit | git commit 执行后 | 不影响git commit的结果 |
| pre-rebase | git rebase执行前 |  |
| post-checkout | git checkout 或 git switch执行后 | 如果不使用 --no-checkout 参数，则在 git clone 之后也会执行 |
| post-merge | git merge 执行后 | 在执行git pull 时也会被调用 |
| pre-push | git push 执行前 |  |
| pre-receive | git receive pack 执行前 |  |
| update |  |  |
| proc-receive |  |  |
| post-receive | git receive pack 执行前 | 不影响 git receive pack 的执行结果 |
| post-update | 当git receive pack对 git push 作出反应并更新仓库中的引用时 |  |
| reference-transaction |  |  |
| push-to-checkout | 当git receive pack对 git push 作出反应并更新仓库中的引用时，以及当推送试图更新当前被签出的分支且 receive.denyCurrentBranch配置被updateInstead时 |  |
| pre-auto-gc | git gc --auto 执行前 |  |
| post-rewrite | 执行 git commit --amend 或 git rebase 时 |  |
| sendemail-validate | git send-email 执行前 |  |
| fsmonitor-watchman | 配置core.fsmonitor被设置为.git/hooks/fsmonitor-watchman 或.git/hooks/fsmonitor-watchmanv2时 |  |
| p4-changelist | git-p4 submit 执行并编辑完changelist message 之后 | 可以使用 git-p4 submit --no-verify绕过该钩子 |
| p4-prepare-changelist | git-p4 submit 执行后，编辑器启动前 | 可以使用 git-p4 submit --no-verify绕过该钩子 |
| p4-post-changelist | 	git-p4 submit 执行后 |  |
| p4-pre-submit | git-p4 submit 执行前 | 可以使用 git-p4 submit --no-verify绕过该钩子 |
| post-index-change | 索引被写入 read-cache.c do_write_locked_index后 |  |

# husky
- 首先执行安装命令 `npm install husky --save-dev`
- 在命令行中使用以下命令初始化Husky
  `husky-init` 或者 `npx husky-init && npm install`
  该命令会在项目中创建一个`.husky`文件夹，并在其中添加一些示例脚本。
- 也可以执行 `npm set-script prepare "husky install"` ，可以在package.json文件的scripts配置项中看到 `"prepare": "husky install"`, 然后执行`npm run prepare`初始化Husky
- 我们也可以单独创建钩子创，比如我们创建一个`commit-msg`钩子：`npm run husky add .husky/commit-msg 'npm run commitlint --edit "$1"'`
- 将上一步创建的 `commit-msg` 钩子添加到git中：`git add .husky/commit-msg`
  
# lint-staged
lint-staged 是一个在git暂存区上运行linters的工具。（Run linters against staged git files and don't let 💩 slip into your code base!）

它将根据package.json依赖项中的代码质量工具来安装和配置 husky 和 lint-staged ，因此请确保在此之前安装（npm install --save-dev）并配置所有代码质量工具，比如Prettier和ESlint。
- 安装：执行 `npm install lint-staged --save-dev` 命令
- `--allow-empty`：使用此参数允许创建空的git提交。默认情况下，当LITER任务撤消所有阶段性的更改时，LITET阶段将抛出一个错误，并中止提交

# git commit提交规范
通常使用 Google AnguarJS 规范的要求。 格式要求：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- `<type>`代表某次提交的类型，比如是修复一个 bug 或是增加一个 feature，具体类型如下：

| 类型 | 描述 |
| ------------- | ------------- |
| feat | 新增feature |
| fix | 修复bug |
| docs | 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等; |
| style | 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑; |
| refactor | 代码重构，没有加新功能或者修复bug |
| perf | 优化相关，比如提升性能、体验 |
| test | 测试用例，包括单元测试、集成测试等 |
| chore | 改变构建流程、或者增加依赖库、工具等 |
| revert | 回滚到上一个版本 |

- `scope`：说明commit影响的范围。scope依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。
- `subject`: 是commit的简短描述；
- `body`: 提交代码的详细描述；
- `footer`: 如果代码的提交是不兼容变更或关闭缺陷，则footer必需，否则可以省略。

# commitlint
地址：https://commitlint.js.org/#/guides-local-setup
- 安装：`npm install --save-dev @commitlint/config-conventional @commitlint/cli`
- 执行`echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`在根目录创建 `commitlint.config.js` 文件（当然也可以手动创建此文件），其内容如下所示:
```
module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    // 以下时我们自定义的规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
                'feat', // 新功能（feature）
                'fix', // 修补bug
                'docs', // 文档（documentation）
                'style', // 格式（不影响代码运行的变动）
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
                'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
                'merge' // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
            ]
        ]
    }
};
```

更加详细的示例：
```
module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    // 以下时我们自定义的规则
    rules:  {
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "perf",
                "test",
                "build",
                "ci",
                "chore",
                "revert"
            ]
        ],
        "type-case": [
            2,
            "always",
            [
                "lower-case"
            ]
        ],
        "type-empty": [
            2,
            "never"
        ],
        "scope-empty": [
            2,
            "never"
        ],
        "scope-case": [
            2,
            "always",
            [
                "lower-case",
                "upper-case",
                "camel-case",
                "kebab-case",
                "pascal-case",
                "sentence-case",
                "snake-case",
                "start-case"
            ]
        ],
        "subject-case": [
            2,
            "always",
            [
                "lower-case",
                "upper-case",
                "camel-case",
                "kebab-case",
                "pascal-case",
                "sentence-case",
                "snake-case",
                "start-case"
            ]
        ],
        "subject-empty": [
            2,
            "never"
        ],
        "subject-full-stop": [
            2,
            "never"
        ],
        "header-max-length": [
            2,
            "always",
            72
        ] 
};
```

如果遇到下列问题：
```
✖ subject may not be empty [subject-empty]
✖ type may not be empty [type-empty]
```
是由于提交不规范导致，需要在type后有一个空格再写body，如：
`git commit -m "fix: ***"`