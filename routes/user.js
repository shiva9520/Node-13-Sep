const express=require('express')
const router=express.Router();
const usercontroller=require('../controllers/usercontroller')
router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res);
})
router.get('/users/:id',(req,res)=>{
    usercontroller.getUserById(req,res);
})
module.exports=router