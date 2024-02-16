const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    console.log("Connecting to the database");
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Terminate the application on database connection error
  }
};

module.exports = connectToDb;
