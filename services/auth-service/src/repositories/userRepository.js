const User = require("../models/user");

const create = async (data) => {
  var newUser = new User({ ...data });
  return await newUser.save();
};

const find = async (email,password) => {
  return await User.findOne({ email, password });
};

module.exports = { create, find };
