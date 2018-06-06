var getUser=(id,callback)=>{

    var user={

        id:id,
        name:'Vikram'

    };
    setTimeout(()=>{
        callback(user);
    },3000);

    console.log("Print");
};

getUser(33,(userObject)=>{


    console.log(userObject);
});