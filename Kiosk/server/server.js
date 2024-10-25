import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import courseRoutes from './routes/courseRoutes.js'
import buildingRoutes from './routes/buildingRoutes.js'

//Load dotenv
dotenv.config()

console.log(process.env.MONGODB_URI);

//Connect to db
connectdb();

//Start express server
const app = express();

//Middleware
app.use(express.json());

app.use('/courses', courseRoutes);
app.use('/buildings', buildingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




