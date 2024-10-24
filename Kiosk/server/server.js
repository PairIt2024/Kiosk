import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import fetchRoutes from "./routes/fetchRoutes.js";
import cors from "cors";

//Load dotenv
dotenv.config();

console.log(process.env.MONGODB_URI);

//Connect to db
connectdb();

//Start express server
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.use("/courses", courseRoutes);
app.use("/routes", fetchRoutes);
// app.post("/calculate-routes", fetchRoutes); //commented out since we only need to run this once

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
