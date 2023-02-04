const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt=require('bcrypt')
const url = "mongodb://0.0.0.0:27017/crud";
const cors = require('cors');
const scontroller = require("./routers/crud")
const userController=require("./routers/crud")
const tcontroller = require("./routers/crud")
console.log("Welcome")
mongoose.connect(url, { useNewUrlParser: true },()=>{
  console.log("DB Connected")
});

const app = express();

app.use(cors({

  origin: '*',

  methods: ['GET','DELETE','UPDATE','PUT','PATCH'],

  optionsSuccessStatus: 205,

}));


const con = mongoose.connection;

con.on("open", function () {
  console.log("connected...");
});
app.use(express.json() )
// app.use("/user",authroutes)
const cookieParser = require("cookie-parser");
// express.use()
app.use('/crud',scontroller)
app.use("/crud",userController)
app.use("/crud",tcontroller)
app.listen(9000,()=>{
    console.log('Server Started')
} )