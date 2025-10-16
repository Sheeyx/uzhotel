#!/bin/bash

# PRODUCTION
# git reset --hard 
# git chekcout master
# git pull origin master

npm i 
npm global add serve
npm
npm run build
pm2 start "npm run start:prod" --name=SNhotel

# DEVELOPMENT
# git reset --hard
# git checkout develop
# git pull origin develop

# npm i 
# pm2 start "npm run start:dev" --name=SNHOTEL