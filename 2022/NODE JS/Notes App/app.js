const yargs = require('yargs')
const chalk = require('chalk-v2');
const notes = require('./notes.js');
const { string, demandOption } = require('yargs');

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  description: 'Adding a Note',
  builder: {
    title: {
      description: 'Title of Note',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'Body of Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  description: 'Removing a Note',
  builder: {
    title: {
      description: 'Title of Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
}); 


yargs.command({
  command: 'list',
  description: 'List all Notes',
  handler: function() {notes.listNotes()}
});

yargs.command({
  command: 'read',
  description: 'Reading a Note',
  handler: function(argv) {notes.readNote(argv.title)}
}); 


yargs.parse();

//console.log(yargs.argv);
  


