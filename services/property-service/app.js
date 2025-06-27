require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db");
const propertyRoutes = require("./src/routes/propertyRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/properties", propertyRoutes);

module.exports = app;
