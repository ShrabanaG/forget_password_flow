import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}user_db`);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error in connecting mongodb", error);
  }
};

export default connectToDb;
