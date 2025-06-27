const Property = require("../models/property");

const create = async (data) => {
  var newProperty = new Property({ ...data });
  return await newProperty.save();
};

const findAll = async (data) => {
  return await Property.find();
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
