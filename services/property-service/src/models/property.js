const mongoose = require("mongoose");
  
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true, required: true },  
  description: String,
  price: { type : Number, required: true  }, 
  location: String,
  imageUrl: String,  
  createdAt: { type: Date, default: Date.now },
  createdBy: { type : String, required: true  },   
});

module.exports = mongoose.model("Property", propertySchema);
