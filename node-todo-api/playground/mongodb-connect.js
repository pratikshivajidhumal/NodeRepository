const {MongoClient,ObjectID}=require('mongodb');
//similar code-> const MongoClient=require('mongodb').MongoClient;

//To create unique object
/*var obj=new ObjectID();
console.log(obj);*/

var user={
    name:'Pratik',
    age:25
};
var{name}=user;
console.log(name);

//TodoApp is the database name it creates database with that name if it doesn't exists
//it doesn't create database until you add something to it


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)
    {
    return  console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

   /* db.collection('Todos').insertOne({

    text:'something to do',
    completed:false

    },(err,result)=>
    {
        if(err)
        {
            return console.log(`Unable to insert ${err}`);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });*/


   /* db.collection('Users').insertOne({

        //_id:1,
        name:'Pratik',
        age:28,
        location:'San Jose'

    },(err,result)=>
    {
        if(err)
        {
            return console.log(`Unable to insert ${err}`);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });*/



    client.close();

});
