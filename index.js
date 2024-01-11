const express = require('express')
const db=require("./dbConnection")
const bodyparser=require('body-parser')
const msg = require("./routes");
const app = express()
const cors=require('cors')
const routes=require('./routes')
app.use(bodyparser.json())
app.use(cors())
app.use(express.static(`${__dirname}/upload`));
// app.use(bodyParser.urlencoded({extended:false}));
app.use('/',msg)
app.listen(4000,() => {
    console.log("SERVER LISTINING TO THE PORT 4000");
  });