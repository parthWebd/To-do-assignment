const TODO=require('../model/toDoApp');
module.exports.home=function(req,res){
    TODO.find({},function(err,task){
        if(err){console.log('Error',err);return;}
        return res.render('home',{
            title:'ToDo',
            tasks:task,
        });
    });
    
}



