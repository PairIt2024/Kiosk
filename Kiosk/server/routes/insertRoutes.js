//script to get location of kiosk to any building to post to db
//commented out since we only need to run this once

// import axios from "axios";
// import Route from "../models/routesModel.js";
// import express from "express";
// const router = express.Router();
// import buildings from "../buildings/buildings.js";

// const fetchDirections = async (startCoords, endCoords) => {
//   const directionsURL = `https://api.mapbox.com/directions/v5/mapbox/walking/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?geometries=geojson&steps=true&access_token=${process.env.MAPBOX_TOKEN}`;

//   try {
//     const response = await axios.get(directionsURL);
//     const route = response.data.routes[0].geometry;
//     const steps = response.data.routes[0].legs[0].steps.map(
//       (step) => step.maneuver.instruction
//     );
//     return { route, steps };
//   } catch (error) {
//     console.error("Error fetching directions:", error);
//     throw error;
//   }
// };

// router.post("/calculate-routes", async (req, res) => {
//   const { userCoords } = req.body;
//   const defaultCoords = [-121.8787279, 37.336733];
//   //CHANGE DEFAULT COORDINATES TO userCords FOR OTHER KIOSK LOCATIONS WHEN RUNNING SCRIPT

//   if (!userCoords) {
//     return res.status(400).json({ error: "User coordinates are required" });
//   }

//   try {
//     const routes = [];

//     // Iterate over all buildings to fetch routes
//     for (const building of buildings) {
//       const routeData = await fetchDirections(defaultCoords, building.coords);
//       const newRoute = new Route({
//         buildingName: building.name,
//         startCoords: defaultCoords,
//         endCoords: building.coords,
//         route: routeData.route,
//         steps: routeData.steps,
//       });
//       await newRoute.save(); // Save each route to MongoDB
//       routes.push(newRoute);
//     }

//     res.status(200).json({ message: "Routes saved successfully", routes });
//     console.log(routes);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch directions" });
//   }
// });

// export default router;
