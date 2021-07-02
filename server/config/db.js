//const mongoose = require("mongoose");
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongodB connected host ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
//module.exports = connectDB;
