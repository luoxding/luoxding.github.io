#!/bin/bash
# git add -A && git commit -m "$(date +%F" "%T)" && git push
# git add -A && git commit -m "$(date +%Y-%m-%d_%H-%M-%S)" && git push

# git init -b main
# git remote add origin git@github.com:luoxding/luoxding.github.io.git

git pull --rebase origin main
git add -A
#vault backup: 2023-04-13 02:32:13
#2023-04-13_17-43-21
git commit -m "repo backup: $(date +%Y-%m-%d" "%H:%M:%S)"
git push origin main

#git pull --rebase origin main
#git add .
#git commit -m "first"
#git push origin main


echo "更新完成~"