#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const regEx = /ref: refs\/heads\/([^\n]+)/;

const readInWriteOut = (branch) => {
  fs.readFile(path.join(process.cwd(),`gitignores/gitignore_${branch}.txt`), 'utf8', (err, data) => {
    fs.writeFile(path.join(process.cwd(), '.gitignore'), data, (err) => {
      if (err) { throw err; }
      console.log(`New .gitignore created from ${branch}:\n`, data);
    });
  });
};

const gitBranch = () => {
  fs.readFile(path.join(process.cwd(), `.git/HEAD`), 'utf8', (err, data) => {
    if (err) { throw err; }
    const match = regEx.exec(data);
    const doesExist = fs.existsSync(`gitignores/gitignore_${match[1]}.txt`);
    if (match) {
      readInWriteOut(doesExist ? match[1] : 'master');
    } else {
      console.log('Something went wrong!!');
    }
  });
};

module.exports = gitBranch;
