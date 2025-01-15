const express = require("express");
const router = express.Router();
const studentcontroller = require("../Controller/StudentController");

// get all students
router.get("/", studentcontroller.getAllStudents);

// get student by od
router.get("/:id", studentcontroller.getStudentById);

// create new document
router.post("/", studentcontroller.createStudent);

// delete student
router.delete("/:id", studentcontroller.deleteStudent);

module.exports = router;
