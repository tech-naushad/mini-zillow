const mongoose = require("mongoose");
  
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },  
  userId: { type: String, required: true , unique: true },  
  password: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  active: { type : Boolean, default: true  }, 
  role: String  
});

module.exports = mongoose.model("Admin", adminSchema);
