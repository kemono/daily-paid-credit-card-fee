#!/usr/bin/env fish
tsc ./src/main.ts
yarn jest

cp --force ./src/index.html ./docs/index.html
cp --force ./src/main.js ./docs/main.js
