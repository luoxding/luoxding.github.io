---
title: "Hugo博客"
date: 2024-05-28T18:05:37+08:00
draft: false
slug: "Hugo"
categories: ["计算机"]
tags: ["指南", "教程"]
---

Hugo是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署。

<!--more-->

1. **Hugo**：静态网站生成器，用于构建和管理网站内容。
   - 安装方法：根据操作系统，在官方网站或包管理器中下载并安装。
2. **PostCSS CLI**：用于处理 CSS 文件，通常与 Hugo Pipes 一起使用。
   - 安装方法：运行 `npm install postcss-cli` 命令进行安装。
3. **Node.js 和 npm**：Node.js 包管理器，用于安装和管理 JavaScript 应用程序和工具。
   - 安装方法：根据操作系统，在官方网站或包管理器中下载并安装。
4. **npx**：Node.js 包管理器 npm 中的一个工具，用于执行 Node.js 包中的可执行文件。
   - 安装方法：运行 `sudo npm install -g npx` 命令进行安装。

确保所有这些组件都已正确安装，并且在部署时都是可用的。如果你有任何其他问题，随时告诉我。

```bash
# 复制 *.gmi 文件和 atom.xml 文件复制到 gemini 文件夹
rsync -zarv --include "*/" --include="*.gmi" --include="atom.xml" --exclude="*" --prune-empty-dirs ./public/* ./gemini 
# 其他文件复制到 www 文件夹
rsync -zarv --include "*/"  --exclude="*.gmi" --exclude="atom.xml" --prune-empty-dirs ./public/* ./www
```

