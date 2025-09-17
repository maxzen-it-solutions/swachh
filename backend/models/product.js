// models/product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  variants: [
    {
      quantity: { type: String, required: true }, // e.g., "10g", "20g"
      price: { type: Number, required: true },
    },
  ],
});

export default mongoose.model("Product", productSchema);
