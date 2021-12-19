const express= require('express')
const router= express.Router()
const UserSchema= require('../models/userSchema')

// get all users
router.get('/',async(req,res)=>{
    try{
        const getAllUser=await UserSchema.find()
        res.status(201).send(getAllUser)
    }catch(err){
         
    }
})
// get a single user
router.get("/:id",async(req,res)=>{
    try{
        const userid= req.params.id
        const getUser= await UserSchema.findOne({_id:id})
        res.status(201).send(getUser)

    }catch(err){

    }
})

// create user
router.post('/',async(req,res)=>{
    try{
        const {name,email}=req.body
        const newUser=new UserSchema({name,email})
        newUser.save()
        res.status(201).send({msg:"Account Created."})
    }catch(err){

    }
})

module.exports= router