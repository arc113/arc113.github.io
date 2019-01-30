#!/bin/bash

echo 'Commit message...?  '
read message

git add --all;
git commit -m "$message"
git push origin master