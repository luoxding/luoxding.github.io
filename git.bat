@echo off 
set log=%DATE%%TIME%
echo %log%
hugo -D
cd public
git add .
git commit -m "%log% update"
git push -u origin main
pause 