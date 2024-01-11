const mongoose=require('mongoose')

let productSchema=new mongoose.Schema({
name:String,
price:Number,
categary:String,
description:String,
img:Object
})

module.exports=new mongoose.model("products",productSchema)