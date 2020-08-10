const mongoose=require('mongoose');
const toDoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        retuired:true,
    },
    date:{
        type:Date,
        required:true,
        
    }
});
const TODO=mongoose.model('todo',toDoSchema);
module.exports=TODO;
