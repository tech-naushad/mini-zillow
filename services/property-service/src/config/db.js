const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      //process.env.MONGO_URI || "mongodb://localhost:27017/propertydb"
      process.env.MONGO_URI || "mongodb+srv://mongodbuser:1nTS0i3ExQe5if7J@dempcluster.d6rdrsh.mongodb.net/propertydb",
    );
    console.log("Mongodb connected");
  } catch (error) {
    console.error("Unable to connect db:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
