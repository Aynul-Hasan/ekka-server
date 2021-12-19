const express= require('express')
const router= express.Router()
const OrderSchema= require('../models/orderSchema')

// get all orders
router.get('/',async(req,res)=>{
    try{
        const findAllorder= await OrderSchema.find()

    }catch(err){

    }
})

// get single products
router.get("/",async(req,res)=>{
    try{
        const email=req.query.email
        const findorder= await OrderSchema.find({email})
        res.status(200).send(findorder)
    }catch(err){

    }
})

// delete order 
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const del= await OrderSchema.deleteOne({_id:id})
    }catch(err){

    }
})
// update order
router.put("/:id",async(req,res)=>{
    try{
        const id= req.params.id
        const isfind= await OrderSchema.updateOne({ _id:id}, { $set: { status:req.body.status } })
        res.status(200).send(isfind)
    }catch(err){

    }
})
module.exports= router