console.log("Starting app");

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;



var command=process.argv[2];

console.log('command',command);
console.log('process',process.argv);
console.log('Yargs',argv);

if(command==='add')
{
    notes.addNote(argv.title,argv.body);
}
else if(command==='list')
{
    notes.getAll();
}
else if(command==='read')
{
    notes.getNote(argv.title);
}
else if(command==='remove')
{
    notes.getNote(argv.title);
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
