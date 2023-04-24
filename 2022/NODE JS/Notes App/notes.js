const chalk = require('chalk-v2');
const fs = require('fs');
const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter( (note) => note.title == title);
    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('Note Added✅'));
    } else {
        console.log(chalk.red.inverse.bold(`Title "${title}" already taken try another one!!!`));
    } 

}

const removeNote = function(title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title != title);
    
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold('Note Removed❌'));
         saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.red.inverse.bold(`Title "${title}" is not found!!!`));
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach((note) => {
      console.log(`${note.title}: ${note.body}`)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
  } else {
      console.log(chalk.red.inverse('Note not found!'))
  }
}

module.exports = { addNote, removeNote, readNote, listNotes };