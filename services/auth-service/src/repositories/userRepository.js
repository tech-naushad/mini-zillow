const User = require("../models/user");
const Admin = require("../models/admin");

const create = async (data) => {
  var newUser = new User({ ...data });
  return await newUser.save();
};

const find = async (email,password) => {
  return await User.findOne({ email, password });
};
const findAdmin = async (userId,password) => {
   console.log('findAdmin');
  return await Admin.findOne({ userId, password });
};
module.exports = { create, find,findAdmin };
