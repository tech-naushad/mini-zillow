const mongoose = require("mongoose");
  
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true, required: true },  
  streetAddress: String,
  price: { type : Number, required: true  }, 
  propertyType: String,
  unitDetails: String,
  size: String,   
  beds: String,
  baths: String,
  imageUrl: String,  
  createdAt: { type: Date, default: Date.now },
  createdBy: { type : String, required: true  },   
});

module.exports = mongoose.model("Property", propertySchema);
