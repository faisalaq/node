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

var removeNote = (title)=>{
    notes = fetchNotes();    //fetch notes
    var filteredNotes = notes.filter((note)=> note.title!==title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length
};

var readNote = (title) => {
    var notes = fetchNotes();
    var foundNotes = notes.filter((note) => note.title===title);
    return foundNotes[0];
};

var logNote = (note) => {
    debugger;
    console.log(`title: ${note.title}\tbody: ${note.body}`);
};

var getAll = ()=>{
    return fetchNotes();
};

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAll,
    logNote
};