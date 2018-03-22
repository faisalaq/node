console.log("Starting app.js");

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('true'));

console.log(_.uniq(['Faisal', 1,2,3,4,2,1,'fajlu']));

// var user = os.userInfo();
// var add = notes.add(9,3)
// console.log(user.username);
// console.log(add);


// fs.appendFile('greetings.txt', `Hello ${user.username}!`);