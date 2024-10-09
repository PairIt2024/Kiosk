import express from "express";
import Course from "../models/coursesModel.js";
const router = express.Router();

//@route GET /test 47607
//test route using /courses/classes/47607
router.get("/classes/:classNumber", async (req, res) => {
  try {
    console.log("GET /classes/:classNumber");
    const classNumber = req.params.classNumber;
    console.log(`Received class number: '${classNumber}'`);
    console.log("Type of classNumber:", typeof classNumber); // Check
    const course = await Course.findOne({ class_number: classNumber });
    console.log("Course found:", course);
    if (course == null) {
      return res.status(404).json({ message: "Course not found" });
    } else {
      res.json(course);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
