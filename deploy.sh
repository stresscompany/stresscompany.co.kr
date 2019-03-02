#!/bin/bash

rm -rf .next/ out/
yarn build
touch out/.nojekyll
touch out/CNAME && echo "stresscompany.co.kr" >> out/CNAME
cp sitemap.xml out/sitemap.xml
cp robots.txt out/robots.txt

( cd out
 git init
 git config user.name "stunstunstun"
 git config user.email "minhyeok.jung85@gmail.com"
 git add .
 git commit -m "Publish static resources to gh-pages branch"
 git push --force --quiet "https://stunstunstun@github.com/stresscompany/stresscompany.github.io" master:master > /dev/null 2>&1
)
