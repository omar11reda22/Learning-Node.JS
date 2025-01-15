const { APP_CONFIG } = require("../config/app.config");

const mongoose = require("mongoose");
mongoose.connect(APP_CONFIG.MONGO_DEV_URI);
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
