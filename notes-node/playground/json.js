/*
var obj=
    {
        name:'Pratik'
    };

var stringObj=JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

*/

/*
var personString='{"name":"Andrew","age":25}';
var person=JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/

const fs=require('fs');

var origionalNote=
    {
        title:'some title',
        body:'some body'

    };

//To convert JSON to string
var origionalNoteString=JSON.stringify(origionalNote);

fs.writeFileSync('notes.json',origionalNoteString);

var noteString=fs.readFileSync('notes.json');
//note

//to convert into JSON
var note=JSON.parse(noteString);
console.log(typeof noteString);
console.log(note.title);










