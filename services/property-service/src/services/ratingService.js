const ratingRepo = require("../repositories/ratingRepository");

const submitRating = async (propertyId, rating) => {
  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }
  return await ratingRepo.createRating({ propertyId, rating });
};

const getRatingSummary = async (propertyId) => {
  const ratings = await ratingRepo.getRatingsByPropertyId(propertyId);

  const grouped = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let total = 0;

  ratings.forEach((r) => {
    grouped[r.rating]++;
    total += r.rating;
  });

  const average = ratings.length ? total / ratings.length : 0;
  return { grouped, average };
};

module.exports = {
  submitRating,
  getRatingSummary
};
