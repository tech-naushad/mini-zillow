require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db");
const routes = require("./src/routes/userRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", routes);

module.exports = app;
