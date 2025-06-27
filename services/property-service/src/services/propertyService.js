const propertyRepo = require("../repositories/propertyRepository");
const documentService = require("./documentService");

const createProperty = async (data,file) => {
  var result = await documentService.upload(file);
  data.imageUrl = result?.cdnUrl + result?.originalFilename;
  data.createdBy = "admin"; // Assuming req.user is set by authentication middleware
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

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
