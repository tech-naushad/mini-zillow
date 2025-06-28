const Property = require("../models/property");

const create = async (data) => {
  var newProperty = new Property({ ...data });
  return await newProperty.save();
};

const findAll = async ({ page = 1, limit = 2 }) => {
  const skip  = (page - 1) * limit;

  const[total, results] = await Promise.all([
    Property.countDocuments(),
    Property.find().skip(skip).limit(limit)
  ]);

 return {
    page,
    totalPages: Math.ceil(total / limit),
    totalResults: total,
    results
  };
};
const findById = async (id) => {
  

  return await Property.findById(id);
};
const update = async (id, data) => {
  return await Property.findByIdAndUpdate(id, data, { new: true });
};
const deleteById = async (id, data) => {
  return await Property.findByIdAndDelete(id);
};
module.exports = { create, findAll, findById, update, deleteById };
