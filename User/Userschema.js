const mongoose=require('mongoose')

var userschema=mongoose.Schema({

    Name:String,
    Email:String,
    Password:String,
    
})

const usermodel=mongoose.model("Details",userschema)
module.exports=usermodel  