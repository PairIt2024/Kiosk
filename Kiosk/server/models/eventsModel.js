import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event_card_id: {
    type: [Number], // or String if needed
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String, // or Date, based on how you want to store it
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tag: {
    type: String, // or null if not needed
    default: null,
  },
  img_src: {
    type: String, // URL for the image
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema, "events");
export default Event;