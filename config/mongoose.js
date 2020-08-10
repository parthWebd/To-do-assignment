//require the mongoose package
const mongoose=require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost/to-Do-Db');

//acquire the connection
const db=mongoose.connection;
//to handle error
db.on('error',console.error.bind(console,"error connecting to db"));
//If up and running
db.once('open',function(){
    console.log("Up and Running for db");
});
