console.log("Starting app.js");

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log('Yargs: ', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        console.log('--');
        console.log(`title: ${note.title}\tbody: ${note.body}`);
    }else{
        console.log('note title taken')
    }
}



// var user = os.userInfo();
// var add = notes.add(9,3)
// console.log(user.username);
// console.log(add);


// fs.appendFile('greetings.txt', `Hello ${user.username}!`);