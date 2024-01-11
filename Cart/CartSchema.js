const mongoose=require('mongoose')

var CartSchema=mongoose.Schema({

    Productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    Userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Details',
        required:true
    },
    
    Date:Date
})

const Cartmodel=mongoose.model("Cart",CartSchema)
module.exports=Cartmodel

