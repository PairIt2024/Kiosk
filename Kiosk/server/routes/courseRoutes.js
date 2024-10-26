import express from "express";
import Course from "../models/coursesModel.js";
const router = express.Router();

//@route GET /test 47607
//test route using /courses/classes/47607
router.get("/classes/:classNumber", async (req, res) => {
  try {
    //console.log("GET /classes/:classNumber");
    const classNumber = req.params.classNumber;
    //console.log(`Received class number: '${classNumber}'`);
    //console.log("Type of classNumber:", typeof classNumber); // Check
    const course = await Course.findOne({ class_number: classNumber });
    //console.log("Course found:", course);
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

//return class name search through user input
//test route using /courses/classes/science
//use query for search bar
router.get("/search", async (req, res) => {
  const { query } = req.query; // User input

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required." });
  }

  try {
    // Find courses where the title or instructor matches the input (case-insensitive)
    const courses = await Course.find({
      $or: [
        { course_title: { $regex: query, $options: "i" } }, // Matches course title
        { instructor: { $regex: query, $options: "i" } }, // Matches instructor name
      ],
    });

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found." });
    }

    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
