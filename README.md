# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 本地路径

```bash
cd /home/ding/文档/Docusaurus/luoxding.github.io/ 
mpn run build
npm run deploy
make deploy
```

### 修改记录

```bash
ding@fedora:~/文档/Docusaurus/luoxding.github.io$ npm run start -- --port 1780 --host 0.0.0.0

```
- 首页指向
- 代码高亮
- 搜索功能
- 备案信息