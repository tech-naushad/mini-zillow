const app = require('./app');
const PORT = process.env.PORT || 5001;
const { connectDB } = require("./src/config/db");

const start = async () => {
  try {
    await connectDB();  // wait for connection before continuing
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

start();