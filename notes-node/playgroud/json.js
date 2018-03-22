// var obj =  {
//     name: 'Faisal'
// };

// var strObj = JSON.stringify(obj);
// console.log(typeof strObj);
// console.log(strObj);

// var personString = '{"name": "Faisal", "age": 27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    type: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);