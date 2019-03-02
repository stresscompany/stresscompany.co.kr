#!/bin/bash

yarn build
touch out/.nojekyll && touch out/CNAME && echo "stresscompany.co.kr" >> out/CNAME

( cd out
 git init
 git config user.name "stunstunstun"
 git config user.email "minhyeok.jung85@gmail.com"
 git add .
 git commit -m "Publish static resources to gh-pages branch"
 git push --force --quiet "https://4c797d4f71badf8ab3151c85ac50ea8fcf3567b6@github.com/stresscompany/stresscompany.github.io" master:gh-pages > /dev/null 2>&1
)
