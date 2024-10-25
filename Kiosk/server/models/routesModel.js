import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  buildingName: { type: String, required: true },
  startCoords: { type: [Number], required: true },
  endCoords: { type: [Number], required: true },
  route: { type: Object, required: true },
  steps: { type: [String], required: true },
});

const Route = mongoose.model("Route", routeSchema, "bbcroutes");

export default Route;
