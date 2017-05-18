# Build-Ignore

[![Build Status](https://travis-ci.org/davidicus/build-ignore.svg?branch=master)](https://travis-ci.org/davidicus/build-ignore)
[![npm](https://img.shields.io/npm/dt/build-ignore.svg)]()

Generate branch specific .gitignore.


## Install
```
yarn add build-ignore -D
```
or

```
npm i build-ignore -D
```
---
## Use
In order to use build-ignore you will need to create a gitignores directory with a text file using the name of your branch specific gitignore as well as your regular(master) gitingore.
```markdown
- ./gitignores
  |_ gitingore_master.txt
  |_ gitingore_specialBranch.txt
```
From your terminal run `./node_modules/.bin/build-ignore`. It will check the current branch and look for it in the gitignores folder. If one is not found it will create one using the gitingore_master.txt file. Must add .gitignore to each gitignore text file in order to avoid having to mess with tracking of actual .gitignore.


## Git hooks
Use as a post-checkout git hook to have build-ignore run automatically when changing branches by adding the following to the `.git/hooks` directory:

``` bash
#.git/hooks/post-checkout
#!/bin/sh

BRANCH_SWITCH="$3"

#check if it was a branch checkout
if [[ $BRANCH_SWITCH -eq 1 ]]
  then
    ./node_modules/.bin/build-ignore
fi
```
![terminal](https://media.giphy.com/media/OBk7HYOkMCu2Y/giphy.gif)

Alternatively, you can use a githooks module like [husky](https://www.npmjs.com/package/husky) and add the following to your package.json scripts section.

``` json
{
  "scripts": {
    "postcheckout": "./node_modules/.bin/build-ignore,
  }
}
```
