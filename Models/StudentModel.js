const {APP_CONFIG} = require("../config/app.config");
// conect with mngoose
const mongoose = require("mongoose");

// set conection with mongodb (conection string)
mongoose.connect(APP_CONFIG.MONGO_DEV_URI); // conect mongoose with conection string 

// create schema 
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  }
  
});

const Student = mongoose.model("Students",studentSchema);

module.exports = Student;