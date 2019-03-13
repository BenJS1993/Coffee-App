const yargs = require("yargs");

const command = process.argv;

if (command === "add") {
  console.log("adding coffee...");
  notes.addNote(yargs.argv.notes);
} else if (command === "remove") {
  console.log("removing coffee...");
  notes.removeNote(yargs.argv.notes);
} else if (command === "read") {
  console.log("reading coffee...");
  notes.readNote(yargs.argv.notes);
} else if (command === "list") {
  console.log("listing coffee");
  notes.listNote(yargs.argv.notes);
} else {
  console.log("unknown command");
  notes.deletedNote(yargs.argv.notes);
}

console.log(process.argv);

console.log(yargs.argv);
