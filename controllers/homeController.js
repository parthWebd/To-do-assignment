const TODO=require('../model/toDoApp');
module.exports.home=function(req,res){
    TODO.find({},function(err,task){
        if(err){console.log('Error',err);return;}
        // for(let i of task){
        //     var st=i.date.toString();
        //     console.log(st.substring(0,15));
        // }
        return res.render('home',{
            title:'ToDo',
            tasks:task,
        });
    });
    
}



