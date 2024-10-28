import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  buildingName: String,
  startCoords: [Number],
  endCoords: [Number],
  route: Object,
  steps: [
    {
      instruction: String,
      distance: Number,
      duration: Number,
    },
  ],
  duration: Number,
  distance: Number,
});

const Route = mongoose.model("Route", routeSchema, "bbcroutes");

export default Route;
