const express=require('express');
const router=express.Router();
const taskController=require('../controllers/taskController');


router.post('/create',taskController.create);
router.get('/delete/:id',taskController.delete);

module.exports=router;

