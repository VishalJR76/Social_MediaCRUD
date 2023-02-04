const express = require("express");
const mongoose = require("mongoose");
const Teachers = require("../models/Teachers");

async function GetAllTeachers(req, res) {
  console.log("came here to get teachers");
  try {
    const teachers = await Teachers.find();
    res.status(200).json({ message: teachers });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function GetTeacherById(req, res) {
  console.log("Get request for teachers");
  // res.send('Get Request')
  try {
    const teachers = await Teachers.findById(req.params.id);
    res.json(teachers);
  } catch (err) {
    res.send("Error" + err);
  }
}

async function Createteacher(req, res) {
  const teachers = new Teachers({
    name: req.body.name,
    Subject: req.body.Subject,
    Exp: req.body.Exp,
  });
  try {
    console.log("Added Successfully");
    const t = await teachers.save();
    res.json({ message: "Added Successfully", data: t });
  } catch (err) {
    res.send("Error");
  }
}

async function UpdateTeacherPatch(req, res) {
  try {
    const teachers = await Teachers.findById(req.params.id);
    console.log("Updating");
    teachers.name = req.body.name;
    const t1 = await teachers.save();
    res.json({ message: "Patched Successfully" });
  } catch (err) {
    res.send("Error");
  }
}

async function DeleteTeacherById(req, res) {
  try {
    const teachers = await Teachers.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.send("Error" + err);
  }
}

async function UpdateTeacherById(req, res) {
  const id = mongoose.Types.ObjectId(req.params.id);
  const filter = {
    _id: id,
  };
  try {
    const teachers = await Teachers.updateOne(filter, req.body);

    res.json({ message: "Updated Successfully" });
  } catch (err) {
    res.send("Error" + err);
  }
}
module.exports = {
  GetAllTeachers,
  GetTeacherById,
  Createteacher,
  UpdateTeacherPatch,
  UpdateTeacherById,
  DeleteTeacherById,
};
