console.log("Starting app");

const fs=require('fs');

const os=require('os');

const notes=require('./notes.js');


var sum=notes.addNumbers(2,3);
console.log(sum);

//var res=notes.addNote();
//console.log(res);

//console.log("here app:::::::");

//var user=os.userInfo();

//fs.appendFileSync('greetings.txt',`Hello ${user.username} you are ${notes.age}` );
