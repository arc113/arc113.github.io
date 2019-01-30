#!/bin/bash

git status

echo 'Commit message...?  '
read message

git add --all;
git commit -m "$message"
git push