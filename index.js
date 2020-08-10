const express=require('express');
const port=8050;
const app=express();
const db=require('./config/mongoose');
const Todo=require('./model/toDoApp');


app.use(express.urlencoded());
//for the template engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'))




app.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("Server Up and running at",port);
});
