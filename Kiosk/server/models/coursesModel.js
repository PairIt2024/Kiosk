import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  section: { type: String, required: true },
  class_number: { type: String, required: true },  
  mode_of_instruction: { type: String, required: true },
  course_title: { type: String, required: true },
  satisfies: { type: String },
  units: { type: String }, 
  class_type: { type: String },
  days: { type: String },
  times: { type: String },
  dates: { type: String },
  open_seats: { type: String },  
  instructor: { type: String },
  location: { type: String }
});
  

// Create the model from the schema
const Course = mongoose.model('Course', courseSchema, 'classes');  

export default Course;
