const express=require('express');
const router=express.Router();

//to use the homeController here
const home_controller=require('../controllers/homeController')


router.get('/',home_controller.home);
router.use('/task',require('./task'));


console.log('Router is running');
module.exports=router;