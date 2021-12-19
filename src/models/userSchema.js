const mongoose= require('mongoose')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        default:''
        // required:true
    }

},{timestamps:true})


const UserSchema= new mongoose.model('user',userSchema)

module.exports=UserSchema;