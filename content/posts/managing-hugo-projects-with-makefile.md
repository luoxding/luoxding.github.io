---
title: "使用 Makefile 管理 Hugo 项目"
date: 2024-05-28T17:43:35+08:00
draft: false
slug: "managing-hugo-projects-with-makefile"
categories: ["指南"]
tags: ["Makefile", "hugo", "sync"]
---

你可以创建一个名为 `Makefile` 的文件，然后按照你的需求添加相应的命令。下面是一个示例 `Makefile`，包含 `make`、`make push`、`make sync` 和 `make local` 的定义：

<!--more-->




```makefile
# Makefile for managing Hugo site and deployment

# Default target: run Hugo server
.PHONY: all
all: server

# Run Hugo server
.PHONY: server
server:
	hugo server

# Git push with timestamped commit message
.PHONY: push
push:
	@time=$$(date "+%Y-%m-%d %H:%M:%S"); \
	commit="Site updated: $$time"; \
	echo $$commit; \
	git add .; \
	git commit -m "$$commit"; \
	git push origin main

# Sync local site to remote server
.PHONY: sync
sync:
	USER=root
	HOST=23.94.38.114
	DIR=/var/opt/blog/
	hugo && rsync -avz --delete public/ $${USER}@$${HOST}:$${DIR}

# Sync local site to local directory
.PHONY: local
local:
	DIR=/var/www/hugo/
	sudo rsync -avz --delete ./public/ $${DIR}
```

### 解释
- `all` 目标是默认目标，指向 `server`。
- `server` 目标运行 `hugo server`。
- `push` 目标执行你的 Git push 脚本，使用内嵌的 shell 语句创建提交信息。
- `sync` 目标运行 Hugo 生成静态文件，然后使用 `rsync` 将生成的文件同步到远程服务器。
- `local` 目标将生成的文件同步到本地目录，使用 `sudo` 权限。

### 使用
1. 将上述内容保存为 `Makefile` 文件。
2. 在命令行中运行相应的命令：
   - 运行 `hugo server`：`make` 或 `make server`
   - 推送更改到 Git 仓库：`make push`
   - 将站点同步到远程服务器：`make sync`
   - 将站点同步到本地目录：`make local`

这个 `Makefile` 能够满足你的需求，方便地管理 Hugo 网站的构建、版本控制和部署。

## 全局多参数

我们可以扩展 `Makefile` 以包含一个参数化的目标，从而实现根据输入参数执行相应的命令。你可以使用 `MAKECMDGOALS` 变量来实现这一点。

下面是一个更新后的 `Makefile`，其中包含 `make deploy` 目标，可以接受参数并执行 `make sync` 或 `make local` 或所有目标：

```makefile
# Makefile for managing Hugo site and deployment

# Default target: run Hugo server
.PHONY: all
all: server

# Run Hugo server
.PHONY: server
server:
	hugo server

# Git push with timestamped commit message
.PHONY: push
push:
	@time=$$(date "+%Y-%m-%d %H:%M:%S"); \
	commit="Site updated: $$time"; \
	echo $$commit; \
	git add .; \
	git commit -m "$$commit"; \
	git push origin main

# Sync local site to remote server
.PHONY: sync
sync:
	USER=root
	HOST=23.94.38.114
	DIR=/var/opt/blog/
	hugo && rsync -avz --delete public/ $${USER}@$${HOST}:$${DIR}

# Sync local site to local directory
.PHONY: local
local:
	DIR=/var/www/hugo/
	sudo rsync -avz --delete ./public/ $${DIR}

# Parameterized deployment
.PHONY: deploy
deploy: $(GOAL)
	@echo "Deploying to $(GOAL)"
	@make $(GOAL)

# Execute all deployment steps
.PHONY: deploy-all
deploy-all: push sync local
	@echo "Completed all deployment steps"

```

### 解释
- `deploy` 目标通过传递 `GOAL` 变量来决定执行 `sync`、`local` 或其他目标。
- `deploy-all` 目标依次执行 `push`、`sync` 和 `local`。

### 使用
1. 将上述内容保存为 `Makefile` 文件。
2. 在命令行中运行相应的命令：
   - 运行 `hugo server`：`make` 或 `make server`
   - 推送更改到 Git 仓库：`make push`
   - 将站点同步到远程服务器：`make sync`
   - 将站点同步到本地目录：`make local`
   - 根据参数执行相应的部署：`make deploy GOAL=sync` 或 `make deploy GOAL=local`
   - 执行所有部署步骤：`make deploy-all`

这个扩展的 `Makefile` 提供了灵活性，可以根据需要选择执行特定的部署步骤或全部部署步骤。


为你的文章选择一个标题时，建议标题简洁明了，并且能够清楚地传达文章内容。如果你要写一篇关于如何使用 Makefile 来管理 Hugo 项目的文章，以下是一些符合英语文法的建议：

1. **Using Makefile with Hugo**
2. **Managing Hugo Projects with Makefile**
3. **Automating Hugo Workflow with Makefile**
4. **Integrating Makefile into Hugo Projects**
5. **Makefile for Hugo: Streamlining Your Workflow**
6. **Boosting Hugo Efficiency with Makefile**

每个标题都能清晰地表明文章的主题，并且符合英语文法。其中，"Using Makefile with Hugo" 和 "Managing Hugo Projects with Makefile" 是比较直接和常见的选择，能够明确表达内容。选择一个你觉得最能代表文章内容的标题即可。

在文件命名时，一般使用以下几种常见的命名约定：

1. **Kebab-case** (使用短横线连接单词): `managing-hugo-projects-with-makefile`
2. **CamelCase** (消除空格，每个单词首字母大写): `ManagingHugoProjectsWithMakefile`
3. **Snake_case** (使用下划线连接单词): `managing_hugo_projects_with_makefile`

其中，**kebab-case** 是最常用的方式，因为它在 URL 和文件名中都具有良好的可读性和普遍接受度。因此，我推荐使用 kebab-case：

`managing-hugo-projects-with-makefile.md`

这样不仅符合文件命名的常见习惯，也能很好地保持可读性和一致性。