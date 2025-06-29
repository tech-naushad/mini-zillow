const ratingService = require('../services/ratingService');

const getRating = async (req, res) => {

  const  propertyId  = req.params;
  if (!propertyId) return res.status(400).json({ error: "Missing propertyId" });

  try {
    const result = await ratingService.getRatingSummary(propertyId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const postRating = async (req, res) => {
 console.log('posting ratings:');
  const { propertyId, rating } = req.body;
  if (!propertyId || rating == null) {
    return res.status(400).json({ error: "propertyId and rating are required" });
  }

  try {
    await ratingService.submitRating(propertyId, rating);
    return res.status(201).json({ message: "Rating submitted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {getRating,postRating};