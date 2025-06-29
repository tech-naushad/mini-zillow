require("dotenv").config();
const express = require("express");
const cors = require("cors");

const propertyRoutes = require("./src/routes/propertyRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");

const app = express();
//connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/properties", propertyRoutes);
app.use("/api/ratings", ratingRoutes);

module.exports = app;
