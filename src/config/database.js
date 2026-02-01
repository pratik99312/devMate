const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pratikagale2795_db_user:7RZa5h0m76fcMrRX@namasternode.bbammq3.mongodb.net/devMate",
  );
};

module.exports = connectDB;
