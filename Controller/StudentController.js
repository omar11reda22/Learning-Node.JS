const Student = require("../Models/StudentModel");

// create - getallstudent - getstudentbyid - update - delete 


// CREATE a new student
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body); // Assumes the request body contains the student data
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: "Error creating student", error });
  }
};

// GET all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("department"); // Populating the department reference
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: "Error fetching students", error });
  }
};

// GET student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "department"
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: "Error fetching student", error });
  }
};

// UPDATE student by ID
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: "Error updating student", error });
  }
};

// DELETE student by ID
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting student", error });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
