const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(      
      process.env.MONGO_DB_URI,
    );
    console.log("Property service - Mongodb connected");
  } catch (error) {
    console.error("Property service - Unable to connect db:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
