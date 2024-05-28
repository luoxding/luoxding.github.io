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

