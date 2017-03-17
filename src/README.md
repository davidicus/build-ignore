# Build-Ignore
---

A post-checkout hook script that generates a .gitignore based on branch name for when different .gitignores are needed
---

## Install
```
yarn add build-ignore
```

---
## Use
In order to use build-ignore you will need to create a gitignores directory with the name of your branch specific gitignore as well as your regular gitingore.
```markdown
- ./gitignores
  |_ gitingore_master.txt
  |_ gitingore_specialBranch.txt
```
