const Todo=require('../model/toDoApp');

module.exports.create=function(req,res){
    console.log(req.body);
    var dat=req.body.Date.toString();
    Todo.create({
        desc:req.body.desc,
        category:req.body.category,
        date:req.body.Date ,

    },function(err,task){
        if(err){console.log('Error',err);return;}
        console.log(task);
        return res.redirect('/');
    });
    
}