const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  propertyId: { type: String, required: true, index: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rating", ratingSchema);