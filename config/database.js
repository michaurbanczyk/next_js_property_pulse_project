import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // only fields specified by our schema will be saved in the database
  mongoose.set("strictQuery", true);

  // if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDb is already connected...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDb connected...");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
