#!/bin/bash

# mkdir ../ember-cli-styleless-tokenfield-gh-pages/
# cd ../ember-cli-styleless-tokenfield-gh-pages/
# git init
# git remote add origin git@github.com:aatienza/ember-cli-styleless-tokenfield.git
# git checkout -b gh-pages

ember build --environment='production'

cp -Rv dist/* ../ember-cli-styleless-tokenfield-gh-pages/

cd ../ember-cli-styleless-tokenfield-gh-pages/

git add -u .

git commit -m 'update'

git push -u origin gh-pages

