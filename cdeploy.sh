#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
touch .nojekyll
git add .nojekyll
git add -A
git commit -m 'cdeploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Hay-J/H-Blog.git master:gh-pages

# 如果使用 travis 持续集成
# git push -f https://${Hblog_ACCESS_TOKEN}@github.com/Hay-J/Hblog.git master:gh-pages

cd -