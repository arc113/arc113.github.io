#!/bin/bash


git add --all;
git status

echo 'Commit message...?  '
read message

git commit -m "$message"
git push