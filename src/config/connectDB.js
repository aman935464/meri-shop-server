import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if(!process.env.MONGODB_URI){
      throw new Error("MONGODB_URI is missing in .env");
      
    }
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "myShop",
    });
    console.log("mongodb connected:", connect.connection.host);
  } catch (error) {
    console.log("mongodb connection error ", error.message);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose error", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

export default connectDB;
