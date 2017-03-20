#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const regEx = /ref: refs\/heads\/([^\n]+)/;
const gitBranch = function() {
  fs.readFile(`${path.join(process.cwd(), '.git/HEAD')}`, 'utf8', (err, data) => {
    //if error in getting
    if (err) throw err;
    const match = regEx.exec(data);
    if (match) {
      if (fs.existsSync(`gitignores/gitignore_${match[1]}.txt`)) {
        fs.readFile(path.join(process.cwd(), `gitignores/gitignore_${match[1]}.txt`), 'utf8', (err, data) => {
          fs.writeFile('./.gitignore', data, (err) => {
            if (err) throw err;
          });
          console.log(`New .gitignore created on ${match[1]}: `, data);
        });
      } else {
        fs.readFile(path.join(process.cwd(),'gitignores/gitignore_master.txt'), 'utf8', (err, data) => {
          fs.writeFile('./.gitignore', data, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
          });
          console.log(`New .gitignore created from master: `, data);
        });
      }
    } else {
      console.log('Somethingwent wrong!!');
    }
  });
}

module.exports = gitBranch;
