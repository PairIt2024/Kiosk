import express from "express";
import Route from "../models/routesModel.js";
const router = express.Router();

//@route GET /test
//test route using /route/washington square hall
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

//return building name search through user input
//test route using /routes/route?query=science
router.get("/route", async (req, res) => {
  const { query } = req.query; // User input

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required." });
  }

  try {
    // Find all routes where the building name contains the query (case-insensitive)
    const routes = await Route.find({
      buildingName: { $regex: query, $options: "i" },
    });

    if (routes.length === 0) {
      return res.status(404).json({ message: "No routes found." });
    }

    res.json(routes);
  } catch (error) {
    console.error("Error fetching routes:", error);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
