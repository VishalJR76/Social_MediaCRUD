const express = require("express");
const authroutes = express.Router();
const brcypt = require("bcryptjs");
const crud = require("../models/c")
const user = require("../models/user");
const teacher= require("../models/Teachers")
const { hashgenerate } = require("../helpers/hashing");
const { hashvalidate } = require("../helpers/hashing");
const { tokengenerate } = require("../helpers/toke");
const {tokenvalidate} = require('../helpers/toke')
const autverify = require("../helpers/autverify");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
dotenv.config();
const userController = require("../routers/crud");
const pvalid = require("../helpers/Password");
const Teachers = require("../models/Teachers");

async function SignUp(req, res) {
  const hashpassword = await hashgenerate(req.body.password);
  const low_email = req.body.e_mail.toLowerCase()
  const users = new user({
    name: req.body.name,
    e_mail:low_email,
    role:req.body.role,
    password: hashpassword,
  });
  try {
    if (!pvalid.validate(req.body.password)) {
      res.status(400).json({ message: "Not matching the password Criteria" });
       }
       
       
       const saved = await users.save();
    // res.status(200).json({ message: users });
    if(users.role =="teacher"){
      const teachers = new Teachers({
            name:req.body.name,
            Subject:req.body.Subject,
            Exp:req.body.Exp
            
      })

      
      const saved= await teachers.save()
      res.status(200).json({message:teachers})
      return

  }
  if(users.role =="student")
  {
    const cruds=new crud({
      name: req.body.name,
    tot_marks: req.body.tot_marks,
    eng_marks: req.body.eng_marks,
    mat_marks: req.body.mat_marks,
    tam_marks: req.body.tam_marks,
    sci_marks: req.body.sci_marks,
    soc_marks: req.body.soc_marks,
    })

    const saved = await cruds.save()
    res.status(200).json({message:cruds})
  }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
async function LogIN(req, res) {
  try {
    const exist = await user.findOne({ name: req.body.name });
    if (!exist) {
      res.json("Username unavailable");
      return
    } 
      const exist1 = await hashvalidate(req.body.password, exist.password);
      if (!exist1) {
        res.json("Password invalid");
        return
      } 
        const token = await tokengenerate(exist.name);
        // res.cookie("jwt", token);
        res.json(token);
      
      
     
  } catch (err) {
    res.json(err);
  }

}
async function validfunc(req, res)  {
  

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_KEY;
  

  try {
      const token = req.header(tokenHeaderKey);

      const verified = jwt.verify(token, jwtSecretKey);
      
      if(verified){
          return res.json("Successfully Verified");
      }else{
          
          return res.status(401).send(error);
      }
  } catch (error) {
      
      return res.status(401).send(error);
  }
}

  //   authroutes.get("/protected",autverify ,(req,res)=>{
  //     res.send("I am a user")
  // })
  
module.exports =
{
  SignUp,
  LogIN,
  validfunc
}
