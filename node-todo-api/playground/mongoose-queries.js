const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');

const {Todo}=require('./../server/models/todo');

const {User}=require('./../server/models/user');

//var id='6b1d638da1a1742bfc63cbfc';

User.findById('5b1de2d7a085b1e6833eabc6').then((user)=>
{
    if(!user)
    {
        return console.log(`Unable to find user ${user}`);
    }
    console.log(JSON.stringify(user,undefined,2));

},(e)=>{
   console.log(e);
});

/*if(!ObjectID.isValid(id))
{
    console.log('Id not valid')

}*/

/*
Todo.find({

    _id:id
}).then((todos)=>{

    console.log('Todos',todos);

});

Todo.findOne({

    _id:id
}).then((todo)=>{

    console.log('Todo',todo);

});
*/
/*

console.log(Todo.findById(id).then((todo) => {

    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);

}).catch((e) => console.log(e)));*/