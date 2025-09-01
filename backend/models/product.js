import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // store base64 or URL
});

const Product = mongoose.model("Product", productSchema);
export default Product;
