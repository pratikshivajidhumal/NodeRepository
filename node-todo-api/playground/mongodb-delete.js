const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)
    {
        return  console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

    //deleteMany delete all the entries with criteria
    /*db.collection('Todos').deleteMany({text:'eat lunch'}).then((success)=>{

        if(success)
            console.log(success);
    })*/

    //deleteOne deletes only first entry if there are multiple
   /* db.collection('Todos').deleteOne({text:'eat lunch'}).then((success)=>{

        if(success)
            console.log(success);
    })*/


    //findOneAndDelete will delete only first
    /*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{

        if(result)
            console.log(result);
    })*/

   /* db.collection('Users').deleteMany({name:'Pratik'}).then((success)=>{

        if(success)
            console.log(success);
    })*/

    db.collection('Users').findOneAndDelete({_id:

    new ObjectID('5b1c930c3ada5620bc609e71')}).then((result)=>{

        if(result)
            console.log(result);
    })

    client.close();

});
