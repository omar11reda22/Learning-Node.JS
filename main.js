const { APP_CONFIG } = require("./config/app.config");
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/Studento");
const departmentroutes = require("./routes/Department");
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(APP_CONFIG.MONGO_DEV_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/Department", departmentroutes);
app.use("/api/Student", studentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
