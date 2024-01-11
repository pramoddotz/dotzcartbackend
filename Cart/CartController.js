const Cartmodel = require("./CartSchema");

const Addtocart = (req, res) => {
    let date=new Date()
  const CartDetails = new Cartmodel({
    Productid: req.body.Productid,
    Userid: req.body.Userid,
    Date: date,
  });

  CartDetails.save()

    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
        msg:"Added to cart"
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 500,
        data: err,
        msg:"Not added to cart"
      });
    });
};

const viewcartByuserid =(req,res)=>{

    Cartmodel.find({Userid:req.params.id})
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

  const RemovecartProduct=(req,res)=>{
    Cartmodel.findByIdAndDelete({_id:req.params.id})
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

module.exports = { Addtocart,viewcartByuserid,RemovecartProduct };
