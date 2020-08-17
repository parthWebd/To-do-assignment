const express=require('express');
const router=express.Router();
const taskController=require('../controllers/taskController');


router.post('/create',taskController.create);
router.post('/delete',taskController.delete);


module.exports=router;

