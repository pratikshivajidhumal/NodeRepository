const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)
    {
        return  console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

    /*db.collection('Todos').findOneAndUpdate((
        {_id:new ObjectID('5b1c9d0fa6540f37dce1f08d')}),
        {
            $set:{completed:false}
        },
        {
            returnOriginal:false
        }
        ).then((result)=>{

            console.log("The result is:",result);
    })*/


    db.collection('Users').findOneAndUpdate((
            {name:'Aadesh'}),
        {
            $set:{name:'Pratik'},
            $inc:{age:-2}
        },
        {
            returnOriginal:false
        }
    ).then((result)=>{

        console.log("The result is:",result);
    })

    client.close();

});
