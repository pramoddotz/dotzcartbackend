const express = require('express')
const router = express.Router();
const product=require('./Products/productController')
const Cart=require('./Cart/CartController');
const Order=require('./Orders/OrderController');
const user=require('./User/Usercontroler')
router.post("/addproduct",product.upload,product.addProduct)
router.post("/viewproduct",product.viewproduct)
router.post('/Editproduct/:id',product.Editproducts)
router.post('/finddataById/:id',product.finddataById)
router.post('/deleteproduct/:id',product.deleteproduct)

//Cart
router.post('/Addtocart',Cart.Addtocart)
router.post('/viewcartByuserid/:id',Cart.viewcartByuserid)
router.post('/RemovecartProduct/:id',Cart.RemovecartProduct)

//order
router.post('/CreateOrder',Order.CreateOrder)
router.post('/vieworderByuserid/:id',Order.vieworderByuserid)
router.post('/DeleteOrder/:id',Order.DeleteOrder)
router.post('/viewallOrders',Order.viewallOrders)
router.post('/viewMyOrders/:id',Order.viewMyOrders)

//login,Reg
router.post('/Regdetails',user.registerUser)
router.post('/userlogin',user.userLogin)
router.post('/SearchProducts',product.SearchProducts)
module.exports=router