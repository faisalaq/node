console.log("Starting app.js");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

console.log(user.username);

fs.appendFile('greetings.txt', `Hello ${user.username}!`);