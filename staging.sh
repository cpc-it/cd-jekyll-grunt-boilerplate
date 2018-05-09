#!/bin/bash
grunt build-staging
cd staging
git add .
git commit -m "staging"
git ftp push
