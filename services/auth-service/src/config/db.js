const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URI,
    );
     console.log("Auth service - Mongodb connected");
  } catch (error) {
    console.error("Auth service - Unable to connect db:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
