// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("Hello from the server!");
