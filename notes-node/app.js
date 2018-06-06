//console.log("Starting app");

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const titleOption=
    {
        describe:'Title of note',
        demand:true,
        alias:'t'
    };

const argv=yargs.command('add','Add a new note', {

        title: titleOption,
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
        .command('list','List all notes')
        .command('read','Read a note',
            {
                title: titleOption,
            })
    .help()
    .argv;



var command=process.argv[2];

//console.log('command',command);
//console.log('process',process.argv);
//console.log('Yargs',argv);

if(command==='add')
{
   var note= notes.addNote(argv.title,argv.body);

   if(note)
   {
       console.log('Note added successfully');
       console.log(`Title: ${note.title}`);
       console.log(`Body:  ${note.body}`);
   }
   else
   {
       console.log('Note is already present can not add duplicate');
   }
}
else if(command==='list')
{
   var allNotes= notes.getAll();
   console.log(`Printing ${allNotes.length} notes`);
   allNotes.forEach((note)=>{
       return notes.logNote(note);
   });
}
else if(command==='read')
{
   var value= notes.getNote(argv.title);
   if(value) {
       console.log('Note body retrieved successfully');
       notes.logNote(value);
   }
   else
   {
       console.log('Note does not exist');

   }
}
else if(command==='remove')
{
var noteRemoved=notes.removeNote(argv.title);

 var message= noteRemoved? 'Note was removed':'Note not found';
 console.log(message);

}
else
{
    console.log('not recognized');
}















//const os=require('os');


//var sum=notes.addNumbers(2,3);
//console.log("The sum is:"+sum);

//console.log(_.isString(true));

//console.log(_.isString('Pratik'));

//var filteredArray=_.uniq([1,1,2,3,4]);
//console.log(filteredArray);

//var res=notes.addNote();
//console.log(res);

//console.log("here app:::::::");

//var user=os.userInfo();

//fs.appendFileSync('greetings.txt',`Hello ${user.username} you are ${notes.age}` );
