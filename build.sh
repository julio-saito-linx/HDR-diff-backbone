#!/usr/bin/env bash

grunt build

cd dist

git add . -A
git commit -m"new dist"
git push origin gh-pages

cd ..
