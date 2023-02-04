var express = require("express")
var router = express.Router()
const autverify = require("../helpers/autverify")

var scontroller = require("../Controller/Student")
var userController = require("../Controller/user")
var tcontroller= require ("../Controller/teacher")


//Route student

router.get("/student",scontroller.GetAllStudents)

router.get('/:id',scontroller.GetStudentById)

router.post('/',scontroller.CreateStudent)

router.patch('/:id',scontroller.UpdateStudentById)

router.put('/:id',scontroller.UpdateAllStudents)

router.delete('/:id',scontroller.DeleteStudentById)


// Route user

router.post("/signup", userController.SignUp)

router.post("/login", userController.LogIN)
router.get("/valid",userController.validfunc)


//Route Teacher

router.get('/',tcontroller.GetAllTeachers)

router.get('/teacher/:id',tcontroller.GetTeacherById)

router.post('/teacher/create',tcontroller.Createteacher)

router.patch('/teacher/:id',tcontroller.UpdateTeacherPatch)

router.put('/teacher/:id',tcontroller.UpdateTeacherById)

router.delete('/teacher/:id',tcontroller.DeleteTeacherById)




module.exports = router