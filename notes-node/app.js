const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't' 
    
};

const bodyOptions = {    
    describe: 'body of note',
    demand: true,
    alias: 'b' 
};

var argv = yargs
    .command('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

console.log(argv._[0]);
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        console.log('--');
        notes.logNote(note);
    }else{
        console.log('note title taken')
    }
}else if(command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved? 'Note was removed' : 'No note was removed';
    console.log(message);
}else if(command === 'read'){
    var noteRead = notes.readNote(argv.title);
    console.log(noteRead);
    if(noteRead){
        notes.logNote(noteRead);
    }else{
        console.log('title not found');
    }
}else if(command==='list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}



// var user = os.userInfo();
// var add = notes.add(9,3)
// console.log(user.username);
// console.log(add);


// fs.appendFile('greetings.txt', `Hello ${user.username}!`);