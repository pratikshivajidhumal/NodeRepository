console.log("Starting app");

const fs=require('fs');

const os=require('os');

const _=require('lodash');

const notes=require('./notes.js');


var sum=notes.addNumbers(2,3);
//console.log("The sum is:"+sum);

//console.log(_.isString(true));

//console.log(_.isString('Pratik'));

var filteredArray=_.uniq(['pratik',1,'pratik',1,2,3,4]);
console.log(filteredArray);

//var res=notes.addNote();
//console.log(res);

//console.log("here app:::::::");

//var user=os.userInfo();

//fs.appendFileSync('greetings.txt',`Hello ${user.username} you are ${notes.age}` );
