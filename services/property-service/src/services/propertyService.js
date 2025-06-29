const propertyRepo = require("../repositories/propertyRepository");
const documentService = require("./documentService");

const createProperty = async (data,file) => {
  var result = await documentService.upload(file);
  data.imageUrl = result?.cdnUrl + result?.originalFilename;
  data.createdBy = data.createdBy; 
  return await propertyRepo.create(data);
};

const getAllProperties = async (data) => {
  const { page = 1, limit = 2 } = data;
  return await propertyRepo.findAll({ page, limit });
};
const getMyListing = async (data) => {
  const {userId, page = 1, limit = 2 } = data;
  return await propertyRepo.findAllByUser({userId, page, limit });
};
const getPropertyById = async (id) => {
  return await propertyRepo.findById(id);
};

const updateProperty = async (id, data) => {
  return await propertyRepo.update(id, data);
};

const deleteProperty = async (id) => {
   console.log("deleteProperty is logged");
  return await propertyRepo.deleteById(id);
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getMyListing
};
