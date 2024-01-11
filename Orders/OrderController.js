const Ordermodel = require("./OrderSchema");
const cartmodel = require("../Cart/CartSchema");

const CreateOrder = (req, res) => {
    let date=new Date()
  const OrderDetails = new Ordermodel({
    Productid: req.body.Productid,
    Userid: req.body.Userid,
    Date: date,
  });

  OrderDetails.save()

    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 500,
        data: err,
      });
    });
};

const vieworderByuserid =(req,res)=>{

  cartmodel.find({Userid:req.params.id})
    .populate('Userid')
    .populate('Productid')
    
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 500,
        data: err,
      });
    });
  
  }

  const  viewMyOrders=(req,res)=>{

    Ordermodel.find({Userid:req.params.id})
      .populate('Userid')
      .populate('Productid')
      
      .exec()
      .then((data) => {
        console.log(data);
        res.status(200).json({
          status: 200,
          data: data,viewMyOrders
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          status: 500,
          data: err,
        });
      });
    
    }

  const DeleteOrder=(req,res)=>{
    Ordermodel.findByIdAndDelete({_id:req.params.id})
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 500,
        data: err,
      });
    });
    
    
    }

    const viewallOrders = (req, res) => {
     Ordermodel
        .find({})
        .populate('Productid')
        .populate('Userid')
     
        .exec()
        .then((data) => {
          console.log(data);
          res.status(200).json({
            status: 200,
            data: data,
          });
        })
        .catch((err) => {
          console.log(err);
          React.status(500).json({
            status: 500,
            data: err,
          });
        });
    };


module.exports={CreateOrder,vieworderByuserid,DeleteOrder,viewallOrders,viewMyOrders}