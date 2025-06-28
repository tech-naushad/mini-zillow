const propertyService = require('../services/propertyService');

const create = async (req, res) => {
  try {
    console.log('Creating property with data:');
    const file = req.file;
    const propertyDetails = JSON.parse(req.body.propertyDetails);
    propertyDetails.createdBy = "admin"; // Assuming req.user is set by authentication middleware
    const property = await propertyService.createProperty(propertyDetails, file);
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    console.log("Fetching properties");
    var page = parseInt(req.query.page) || 1;
    var limit = parseInt(req.query.limit) || 2;
    const paginationData = { page, limit };

    const properties = await propertyService.getAllProperties(paginationData);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    console.log('Fetching property with ID:', req.params.id);
    const property = await propertyService.getPropertyById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const property = await propertyService.updateProperty(req.params.id, req.body);
    if (!property) return res.status(404).json({ error: 'Not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const result = await propertyService.deleteProperty(req.params.id);
    if (!result) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {create, getAll, getById, update, remove};