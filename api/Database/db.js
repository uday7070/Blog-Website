import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI;
const connectDB = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};
export default connectDB;
