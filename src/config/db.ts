import mongoose from "mongoose";

const getDbConnection = async () => {
  const db = await mongoose.connect("mongodb://localhost:27017/ecommerce");
  return db;
};

export default getDbConnection;
