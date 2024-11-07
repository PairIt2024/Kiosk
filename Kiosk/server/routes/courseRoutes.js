import express from "express";
import Course from "../models/coursesModel.js";
import mongoose from "mongoose";
const router = express.Router();


router.get("/classes/byIds", async (req, res) => {
  const { ids } = req.query;

  // Ensure that ids is provided and is not empty
  if (!ids || ids.length === 0) {
    return res.status(400).json({ message: "No class IDs provided." });
  }

  console.log("GET /classes/byIds");

  // Split the ids string into an array
  const classIds = ids.split(",");
  console.log(classIds);

  // Filter out invalid ObjectId values using mongoose validation
  const validClassIds = classIds.filter(id => mongoose.Types.ObjectId.isValid(id));
  console.log("Valid Class IDs:", validClassIds);

  // If no valid IDs remain, return an error
  if (validClassIds.length === 0) {
    return res.status(400).json({ message: "Invalid or no valid class IDs provided." });
  }

  try {
    // Query the database for the valid class IDs
    const classes = await Course.find({ _id: { $in: validClassIds } });
    console.log("Classes found:", classes);
    res.json(classes);
  } catch (err) {
    console.error("Error fetching classes:", err);
    res.status(500).json({ message: "Error fetching classes", error: err });
  }
});
//@route GET /test 47607
//test route using /courses/classes/47607
router.get("/classNumber", async (req, res) => {
  try {
    //console.log("GET /classes/:classNumber");
    const classNumber = req.params.classNumber;
    console.log("GET /classes/:classNumber");
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
//test route using /courses/science
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
