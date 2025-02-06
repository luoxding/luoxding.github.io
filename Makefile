# 项目名称
PROJECT_NAME = notes
# 本地的构建路径
BUILD_DIR = ./build
NGINX_DIR = /var/www/docs
# NAS 局域网路径
NAS_USER = root
NAS_IP = 192.168.10.3
NAS_PATH = /volume1/ding_share/docusaurus/notes
# 远程服务器路径
SERVER_USER = root
SERVER_HOST = 1.94.254.213
SERVER_PATH = /var/www/notes
# GitHub Repo 配置
GITHUB_REPO = git@github.com:yourusername/yourrepo.git
GITHUB_BRANCH = main

# 发布到本地nginx
publish_to_local:
	sudo rsync -avz --delete $(BUILD_DIR)/ $(NGINX_DIR)
	@echo "发布到本机 nginx 路径完成"

# 发布到局域网 NAS
publish_to_nas:
	rsync -avz --delete $(BUILD_DIR)/ $(NAS_USER)@$(NAS_IP):$(NAS_PATH)
	@echo "发布到局域网 NAS 完成"

# 发布到远程服务器
publish_to_server:
	rsync -avz --delete $(BUILD_DIR)/ $(SERVER_USER)@$(SERVER_HOST):$(SERVER_PATH)
	@echo "发布到远程服务器完成"

# 发布到 GitHub
publish_to_github:
	# 假设您已经在本地 Git 仓库中配置了 GitHub 的远程仓库
	git add .
	git commit -m "Deploy updated docs"
	git push $(GITHUB_REPO) $(GITHUB_BRANCH)
	@echo "发布到 GitHub 完成"

# 发布到所有目标
publish_all: publish_to_nas publish_to_server publish_to_github

# 清理构建文件
clean:
	rm -rf $(BUILD_DIR)
	@echo "清理构建文件完成"

# 默认目标，发布到所有目标
deploy: publish_all
