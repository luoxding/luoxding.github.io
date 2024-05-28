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