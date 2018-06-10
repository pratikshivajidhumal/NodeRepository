var mongoose=require('mongoose');
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

module.exports={Todo};