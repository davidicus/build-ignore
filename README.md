# Build-Ignore

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

Consider using a githooks module like [husky](https://www.npmjs.com/package/husky) to have code run automatically with post-checkout hook.

```
// Edit package.json
{
  "scripts": {
    "postcheckout": "./node_modules/.bin/build-ignore,
  }
}
```

![terminal](https://media.giphy.com/media/G7VwLIwql0Ai4/giphy.gif)
