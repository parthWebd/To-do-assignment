const express=require('express');
const port=8050;
const app=express();
const db=require('./config/mongoose');
const Todo=require('./model/toDoApp');


app.use(express.urlencoded());
app.use(express.static('./assets'))

//extract syles and scripts from sub pages in layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

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
