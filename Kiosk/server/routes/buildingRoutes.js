import express from "express";
import Route from "../models/routesModel.js";
const router = express.Router();

router.get("/bbcroutes/:buildingName", async (req, res) => {
  try {
    console.log("GET /bbcroutes/:buildingName");
    const buildingName = req.params.buildingName;
    console.log(`Received building name: '${buildingName}'`);
    console.log("Type of building name:", typeof buildingName); // Check
    const building = await Route.findOne({ buildingName: buildingName });
    console.log("Building found:", building);
    if (building == null) {
      return res.status(404).json({ message: "Building not found" });
    } else {
      res.json(building);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
