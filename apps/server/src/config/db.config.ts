import mongoose from "mongoose"
// import {  } from "dotenv";

export const connectDb = () => {
  mongoose.connect(process.env.CONNECTION_STRING as string)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("fail to connect the database due to\n", err))
}