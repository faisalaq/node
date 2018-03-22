console.log("Starting node.js");

var fs = require('fs');

var fetchNotes = ()=>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    notes = fetchNotes();
    note = {
        title, 
        body
    };
    
    var dupNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(dupNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
        
    }   
};

module.exports = {
    addNote
};