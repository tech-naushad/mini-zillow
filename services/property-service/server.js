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

//Multi clustor setup currently not been setup in render on free tier
// const cluster = require('cluster');
// const os = require('os');
// const app = require('./app');
// const { connectDB } = require('./src/config/db');

// const PORT = process.env.PORT || 5001;
// const numCPUs = os.cpus().length;

// if (cluster.isPrimary) {
//   console.log(`Primary process ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork(); // Restart on crash
//   });
// } else {
//   const start = async () => {
//     try {
//       await connectDB();
//       console.log(`Worker ${process.pid} connected to MongoDB`);

//       app.listen(PORT, () => {
//         console.log(`Worker ${process.pid} is running on port ${PORT}`);
//       });
//     } catch (err) {
//       console.error(`Worker ${process.pid} failed to connect`, err);
//       process.exit(1);
//     }
//   };

//   start();
// }
