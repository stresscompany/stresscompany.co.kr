#!/bin/bash

touch out/.nojekyll && touch out/CNAME && echo \"stresscompany.co.kr\" >> out/CNAME && git add out/ && git commit -m \"Deploy to gh-pages\" 
git subtree push --prefix out origin gh-pages"
