## 介绍页面2

```yml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2.1.2
        with:
          node-version: '14.x'
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/.vitepress/dist
          # cname: <your-custom-domain> # 如果您有自定义域名，请填写在这里
```
