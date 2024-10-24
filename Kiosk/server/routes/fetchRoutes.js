import express from "express";
import Route from "../models/routesModel.js";
const router = express.Router();

//@route GET /test
//test route using /route/washington-square-hall
router.get("/route/:buildingName", async (req, res) => {
  try {
    const buildingName = req.params.buildingName;
    //console.log("GET /route/:buildingName");
    //console.log(`Received buildingname: '${buildingName}'`);
    //console.log("Type of buildingname:", typeof buildingName);
    const route = await Route.findOne({ buildingName });
    //console.log("Route found:", route);

    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.json(route);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
