const mongoose=require('mongoose')

var OrderSchema=mongoose.Schema({


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

const Ordermodel=mongoose.model("Orders",OrderSchema)
module.exports=Ordermodel
