#!/bin/bash
message="$1"
if [ -z "$1" ]; then 
    echo "Please provide a commit message." 
    exit 1 
fi

git add . 
git commit -m "$message " 
git push origin "$(git branch --show-current)"