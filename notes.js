console.log('Starting Notes.js');
const fs = require('fs');


var addNote = (title, body) => {
    console.log('Adding note entitled : ' + title);
    console.log("Here's the note's content : " + body);

    var notes = ["", ""];
    var note = {
      title: title,
      body: body
    };

    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);

    notes = notes.push(note);

    fs.writeFileSync(`notes-data.json`, JSON.stringify(notes))

};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting the note entitled : ' + title);
    console.log("Here's the note's content : " + body);
};

var removeNote = (title) => {
    console.log('Successfully deleted the note entitled : ' + title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};