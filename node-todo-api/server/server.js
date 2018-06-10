const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{

        type:String
    },
    completed:{

        type:Boolean
    },
    completedAt:{

        type:Number
    }
});

/*var newTodo=new Todo({
    text:'Cook dinner'
});*/

var newTodoSecond=new Todo({
    text:'Eat dinner',
    completed:true,
    completedAt:10.42
});

/*
newTodo.save().then((doc)=>
{
console.log('Saved todo',doc);
},(e)=>{
    console.log('Unable to save too');
})
*/

newTodoSecond.save().then((doc)=>
{
    console.log('Saved todo',doc);
},(e)=>{
    console.log('Unable to save too');
})
