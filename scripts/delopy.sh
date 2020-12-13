#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:Wang-kai960620/Panda-chart-website.git  &&
git push -u origin master -f
cd -