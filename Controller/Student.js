const express = require("express");
const router = express.Router();
const crud = require("../models/c");
const user = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const scontroller= require("../routers/crud")

//Find details of all ID
 async function GetAllStudents(req, res){
  console.log('Get request for teacher!!!!!')
  // res.send('Get Request')
  try {
    const cruds = await crud.find();
    res.json(cruds);
  } catch (err) {
    res.send("Error" + err);
  }
}

//Find details by ID
 async function GetStudentById (req, res)  {
  // console.log('Get request')
  // res.send('Get Request')
  try {
    const cruds = await crud.findById(req.params.id);
    res.json(cruds);
  } catch (err) {
    res.send("Error" + err);
  }
}

//Insert data into table
async function  CreateStudent(req, res)  {
  const cru = new crud({
    name: req.body.name,
    tot_marks: req.body.tot_marks,
    eng_marks: req.body.eng_marks,
    mat_marks: req.body.mat_marks,
    tam_marks: req.body.tam_marks,
    sci_marks: req.body.sci_marks,
    soc_marks: req.body.soc_marks,
  });

  try {
    console.log("came here");
    const c1 = await cru.save();
    res.json({ message: "Added Successfully" });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
}

 async function UpdateAllStudents(req, res)  {
  try {
    const cruds = await crud.findById(req.params.id);
    console.log("Hello");
    cruds.name = req.body.name;
    const c1 = await cruds.save();
    res.json({ message: "Patched Successfully" });
  } catch (err) {
    res.send("Error");
  }
}
//Delete data by ID
async function DeleteStudentById(req, res) {
  // console.log('Get request')
  // res.send('Get Request')
  try {
    const cruds = await crud.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.send("Error" + err);
  }
}

//Update data by ID
async function UpdateStudentById(req, res)  {
  const id = mongoose.Types.ObjectId(req.params.id);
  // console.log('Get request')
  // res.send('Get Request')
  const filter = {
    _id: id,
  };
  try {
    const cruds = await crud.updateOne(filter, req.body);

    res.json({ message: "Updated Successfully" });
  } catch (err) {
    res.send("Error" + err);
  }
}




module.exports = {
    GetAllStudents,GetStudentById,DeleteStudentById,UpdateAllStudents,UpdateStudentById,CreateStudent
};
