const usermodel=require('./Userschema');

const registerUser=(req,res)=>{
    const userdetails= new usermodel({

        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
    })
    userdetails
    .save()
    .then((data)=>{
        console.log('data saved')
        res.json({
            status:200,
            msg:"success",
            data:data,
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            msg:"error",
            data:err,
        })
    })
}


const userLogin=(req, res)=>{
    usermodel
      .findOne({ Email: req.body.Email })
      .exec()
  
      .then((data) => {
        console.log("data obtained", data);
        if (req.body.Password == data.Password) {
          res.json({
            status: 200,
            msg: "Login success",
            data: data,
          });
        } else {
          res.json({
            status: 500,
            msg: "invalid user",
          });
        }
      })
      .catch((data, err) => {
        req.body.Email !== data.Email;
        res.json({
          status: 500,
          msg: "invalid user",
          data: err,
        });
      }); 
}




module.exports={registerUser,userLogin}