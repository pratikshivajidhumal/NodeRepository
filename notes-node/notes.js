//console.log("Starting notes");

module.exports.age=25;

const fs= require('fs');

var fetchNotes=()=>
{

    try
    {

        var noteString=fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }
    catch(e)
    {
        return [];
    }
};



var addNote=(title,body)=>
{
    var notes = fetchNotes();
    var note =
        {
            title,
            body
        };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;

    }

    console.log('Duplicate notes ' + duplicateNotes);
};

var fetchNote=(title)=>
{

    try
    {

        var noteString=fetchNotes();
        var duplicateNotes = noteString.filter((note) => note.title === title);
        console.log('Duplicate note body '+duplicateNotes[0].body);
        return duplicateNotes[0];


    }
    catch(e)
    {

    }
};


var removeNote=(title)=>
{

    var allNotes= fetchNotes();
    var filteredNotes=allNotes.filter((note) => note.title !== title);

    console.log('filteredNotes ' + JSON.stringify(filteredNotes));

    saveNotes(filteredNotes);

    return allNotes.length!==filteredNotes.length;


};
    var saveNotes=(notes)=>
    {
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    };


/*var removeNote=(notes)=>
{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};*/


    /*var fetchNotes=()=>
    {

        try
        {

            var noteString=fs.readFileSync('notes-data.json');
            return JSON.parse(noteString);
        }
        catch(e)
        {
            return [];
        }
    };*/


var logNote=(note)=>
{
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


    //console.log(duplicateNotes);

    //console.log('Adding note',title,body);


var getAll=()=>
{
    var allNotes= fetchNotes();
    return allNotes;
};

var getNote=(title)=>
{
   return fetchNote(title);
};

/*var removeNote=(title)=>
{
console.log('Removing notes',title);
}*/

module.exports={
addNote,
getAll,
getNote,removeNote,logNote
//similar to addNote:addNote
};

/*module.exports.addNote=()=>{
console.log('addNote');
return 'New note';
};*/

/*module.exports.addNumbers=(no1,no2)=>{

    return no1+no2;
};*/