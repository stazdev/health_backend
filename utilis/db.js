const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://devoluwashola:Robotics0905@health.d0a3bun.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to Connect MongoDb");
});

db.once("open", () => {
  console.log("Connected To MongoDB");
});
