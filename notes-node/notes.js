console.log("Starting notes");

module.exports.age=25;

var addNote=(title,body)=>
{
    console.log('Adding note',title,body);
};

var getAll=()=>
{
    console.log('Get all notes');
};

var getNote=(title)=>
{
    console.log('Gettting note:',title);
};

var removeNote=(title)=>
{
console.log('Removing notes',title);
}

module.exports={
addNote,
getAll,
getNote,
    removeNote
//similar to addNote:addNote
};

/*module.exports.addNote=()=>{
console.log('addNote');
return 'New note';
};*/

/*module.exports.addNumbers=(no1,no2)=>{

    return no1+no2;
};*/