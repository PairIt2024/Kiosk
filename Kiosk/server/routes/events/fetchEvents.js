import express from "express";
import Event from "../../models/eventsModel.js";

const router = express.Router();

router.get("/getEvents", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
