#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const regEx = /ref: refs\/heads\/([^\n]+)/;
const gitBranch = function(branch = publish) {
  console.log(branch);
  fs.readFile(`${path.join(process.cwd(), '.git/HEAD')}`, 'utf8', (err, data) => {
    //if error in getting
    if (err) throw err;
    const match = regEx.exec(data);
    if (match) {
      if (match[1] === branch) {
        fs.readFile(path.join(process.cwd(), `gitignores/gitignore_${branch}.txt`), 'utf8', (err, data) => {
          fs.writeFile('./.gitignore', data, (err) => {
            if (err) throw err;
            console.log('Something is went wrong!!');
          });
          console.log('New .gitignore created: ', data);
        });
      } else {
        fs.readFile(path.join(process.cwd(),'gitignores/gitignore_master.txt'), 'utf8', (err, data) => {
          fs.writeFile('./.gitignore', data, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
          });
          console.log('DATA', data);
        });
      }
    }
  });
}

module.exports = gitBranch;
