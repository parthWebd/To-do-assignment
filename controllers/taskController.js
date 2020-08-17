const Todo=require('../model/toDoApp');

module.exports.create=function(req,res){
    // console.log(req.body);
    var dat=req.body.Date.toString();
    Todo.create({
        desc:req.body.desc,
        category:req.body.category,
        date:req.body.Date.toString().split("G")[0] ,

    },function(err,task){
        if(err){console.log('Error',err);return;}
        // console.log(task);
        return res.redirect('/');
    });
    
}

module.exports.delete=function(req,res){
    
    if(!Array.isArray(req.body.task)){
        console.log(req.body.task);
        Todo.findByIdAndDelete(req.body.task,function(err){
            if(err){console.log('Error',err);return;}
            return res.redirect('back');
        });
    }
    else{
        for(let i of req.body.task){
            console.log(i);
            Todo.findByIdAndDelete(i,function(err){
                if(err){console.log('Error',err);return;}
                
            });
        }
        return res.redirect('back');
    }
    
        
    
    
}
