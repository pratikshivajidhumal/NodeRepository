const MongoClient=require('mongodb').MongoClient;


//TodoApp is the database name it creates database with that name if it doesn't exists
//it doesn't create database until you add something to it
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)
    {
    return  console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

    db.collection('Todos').insertOne({

    text:'something to do',
    completed:false

    },(err,result)=>
    {
        if(err)
        {
            return console.log(`Unable to insert ${err}`);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });



    client.close();

});
