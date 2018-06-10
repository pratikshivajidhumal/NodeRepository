const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{

        type:String,//data type must mbe string
        required:true,//must be present
        minlength:1,//min length 1 is required
        trim:true//will remove any empty spaces
    },
    completed:{

        type:Boolean,
        default:false
    },
    completedAt:{

        type:Number,
        default:null
    }
});

/*var newTodo=new Todo({
    text:'Cook dinner'
});*/

var newTodoSecond=new Todo({
text:'   Edit this video '

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
