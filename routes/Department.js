const express = require("express");
const router = express.Router();
const departmentController = require("../Controller/DepartmentController");

// get all students
router.get("/", departmentController.getAlldepartments);

// get student by od
router.get("/:id", departmentController.getdepartmentbyid);

// create new document
router.post("/", departmentController.createDepartment);

// delete student
router.delete("/:id", departmentController.deletedepartment);

module.exports = router;
