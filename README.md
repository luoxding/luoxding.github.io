# Buyi luo's Blog

Here is my [blog](https://luoxding.github.io/).

Clone the repo

```bash
git clone https://github.com/luoxding/luoxding.github.io.git --recurse-submodules
git clone git@github.com:luoxding/luoxding.github.io.git --recurse-submodules
```


侧边目录右

修改`assets/css/extended/blank.css`

```css
left: calc((var(--toc-width) + var(--gap)) * -1);
// 改成右边目录
right: calc((var(--toc-width) + var(--gap)) * -1);
```

## Makefile

   - 运行 `hugo server`：`make` 或 `make server`
   - 推送更改到 Git 仓库：`make push`
   - 将站点同步到远程服务器：`make sync`
   - 将站点同步到本地目录：`make local`
   - 根据参数执行相应的部署：`make deploy GOAL=sync` 或 `make deploy GOAL=local`
   - 执行所有部署步骤：`make deploy-all`