const Department = require("../Models/DepartmentModel");

// create - getallstudent - getstudentbyid - update - delete

// CREATE a new student
const createDepartment = async (req, res) => {
  try {
    const department = new Department(req.body); // Assumes the request body contains the student data
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: "Error creating student", error });
  }
};

// GET all students
const getAlldepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate("departments"); // Populating the department reference
    res.status(200).json(departments);
  } catch (error) {
    res.status(400).json({ message: "Error fetching departments", error });
  }
};

// GET student by ID
const getdepartmentbyid = async (req, res) => {
  try {
    const dept = await Department.findById(req.params.id).populate(
      "department"
    );
    if (!dept) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json(dept);
  } catch (error) {
    res.status(400).json({ message: "Error fetching student", error });
  }
};

// UPDATE student by ID
const updatedepartment = async (req, res) => {
  try {
    const dept = await Department.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!dept) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json(dept);
  } catch (error) {
    res.status(400).json({ message: "Error updating department", error });
  }
};

// DELETE student by ID
const deletedepartment = async (req, res) => {
  try {
    const dept = await Department.findByIdAndDelete(req.params.id);
    if (!dept) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json({ message: "department deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting student", error });
  }
};

module.exports = {
  createDepartment,
  getAlldepartments,
  getdepartmentbyid,
  updatedepartment,
  deletedepartment,
};
