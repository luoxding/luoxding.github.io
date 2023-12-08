#!/bin/bash
# git add -A && git commit -m "$(date +%F" "%T)" && git push
# git add -A && git commit -m "$(date +%Y-%m-%d_%H-%M-%S)" && git push

git add -A
#vault backup: 2023-04-13 02:32:13
#2023-04-13_17-43-21
git commit -m "repo backup: $(date +%Y-%m-%d" "%H:%M:%S)"
git pull
git push

echo "更新完成~"