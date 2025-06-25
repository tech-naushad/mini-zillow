const propertyRepo = require('../repositories/propertyRepository');

const createProperty = async (data) => {
  // Additional business rules can go here
  return await propertyRepo.create(data);
};

const getAllProperties = async () => {
  return await propertyRepo.findAll();
};

const getPropertyById = async (id) => {
  return await propertyRepo.findById(id);
};

const updateProperty = async (id, data) => {
  return await propertyRepo.update(id, data);
};

const deleteProperty = async (id) => {
  return await propertyRepo.delete(id);
};

module.exports = {createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty}; 
