#!/bin/bash
ember build --environment='production'

cd ../ember-cli-styleless-tokenfield-gh-pages/

rm -r assets

cp -Rv ../ember-cli-styleless-tokenfield/dist/* .

git add -A .

git commit -m 'update'

git push -u origin gh-pages
