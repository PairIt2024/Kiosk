import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const router = express.Router();

// //imported schemas
import Course from "./models/coursesModel.js";

// //load env file
dotenv.config();
const app = express();

// //middleware
app.use(express.json());
const PORT = process.env.PORT || 5001;

//conect to mongoDB
const MONGO_URI = process.env.MONGODB_URI;
// console.log("MongoDB URI:", MONGO_URI);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("Server running before call");

app.get("/classes/:class_number", async (req, res) => {
  try {
    const classNumber = String(req.params.class_number).trim();
    console.log("Request class_number:", classNumber);
    console.log("Class Number Type:", typeof classNumber);

    const course = await Course.findOne({
      class_number: classNumber,
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
    console.log("Course found:", course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
