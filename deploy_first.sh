#!/bin/sh

printf "\e[33m\nstarting Buidler 👷...\e[39m\n"
printf "\e[33m\n waiting for commit message ⌚...\e[39m\n"

printf "Enter commit message: "
read message

printf "\e[33m\nBuilding project...\e[39m\n"
hugo

printf "\\e[33m\nPushing to the web...\e[39m\n\n"
cd public
git init
git add .
git commit -m "$message"
git branch -M "web"
git push origin web
printf "\e[32m\nSuccessfully deployed the website!\e[39m"

printf "\e[33m\n\nNow pushing latest changes to codenanshu repository...\e[39m\n\n"
cd ../
git add .
git commit -m "$message"
git pull origin main
git push origin main
printf "\033[0;32m\nSuccessfully pushed changes to the repository!\e[39m\n"