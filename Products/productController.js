const product = require("./productSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("image");

const addProduct = (req, res) => {
 


  let newProduct = new product({
    name: req.body.name,
    price: req.body.price,
    categary: req.body.categary,
    description: req.body.description,
    img:req.file
  });
  newProduct
    .save()

    .then((data) => {
      res.json({
        status: 200,
        msg: "data saved",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "data not saved",
        err: err,
      });
    });
};
const viewproduct = (req, res) => {
  product
    .find({})
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

const deleteproduct = (req, res) => {
  product
    .findByIdAndDelete({
      _id: req.params.id,
    })
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
};

const Editproducts = (req, res) => {
  product
    .findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        price: req.body.price,
        categary: req.body.categary,
        description: req.body.description,
      }
    )
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
};

const finddataById = (req, res) => {
  let id = req.params.id;
  product
    .findById({ _id: id })
    .exec()
    .then((data) => {
      console.log("data obtained");
      res.json({
        status: 200,
        msg: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "error",
        data: err,
      });
    });
};
const SearchProducts = (req, res) => {
  product
    .find({title:{$regex:req.body.title}})
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
};
module.exports = {
  addProduct,
  viewproduct,
  Editproducts,
  finddataById,
  deleteproduct,
  upload,SearchProducts,
};
