const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)
    {
        return  console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

    //In find method set key:value type you want ex{completed:false}
   /* db.collection('Todos').find({_id:
            new ObjectID('5b1c8f2cdd62f04410ad6b4f')}).toArray().then((docs)=>{

            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
    },(err)=>
        {

            console.log('Unable to fetch data',err);
        }
        )*/

   //get the count
   /* db.collection('Todos').find().count().then((count)=>{

            console.log(`Todos count:${count}`);

        },(err)=>
        {

            console.log('Unable to fetch data',err);
        }
    )*/

   //to get all the docs with name Pratik
    db.collection('Users').find({name:'Pratik'}).toArray().then((docs)=>{

            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>
        {

            console.log('Unable to fetch data',err);
        }
    )

    client.close();

});
