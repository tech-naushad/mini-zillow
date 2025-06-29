const Rating = require("../models/rating.js");

const createRating = async ({ propertyId, rating }) => {
  const newRating = new Rating({ propertyId, rating });
  return await newRating.save();
};

const getRatingsByPropertyId = async (propertyId) => {
  return await Rating.find({ propertyId });
};

module.exports = {
  createRating,
  getRatingsByPropertyId
};
