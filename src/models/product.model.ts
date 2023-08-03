import mongoose from "mongoose";

export interface IProduct {
  name: String;
  id: Number;
  quantity: Number;
}

const ProductSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  id: {
    type: String,
    unique: true,
  },
  quantity: {
    required: true,
    type: Number,
  },
});
const Product = mongoose.model("Product", ProductSchema);

export default Product;
