import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB Sucessfully");
  } catch (error) {
    console.log(`Error Occured while connecting to mongosb: ${error.message}`)
  }
};
