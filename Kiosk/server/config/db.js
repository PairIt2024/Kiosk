import mongoose from "mongoose";

export default async function connectDB() {
  try {
    // Replace process.env.MONGO_URI with the actual URI
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB Connected: ${conn.connection.host}, Database: ${conn.connection.name}`
    );
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
