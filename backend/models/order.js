// // backend/models/Order.js
// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     items: [
//       {
//         productId: String,
//         name: String,
//         type: String,
//         qty: Number,
//         price: Number,
//       },
//     ],
//     totalAmount: {   // ⚡ renamed to match route
//       type: Number,
//       required: true,
//     },
//    address: {
//   name: String,
//   mobile: String,
//   pincode: String,
//   locality: String,
//   address: String,
//   city: String,
//   state: String,
//   landmark: String,
//   alternatePhone: String,
//   addressType: String,
// }
// ,
//     status: {
//       type: String,
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        type: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    address: {
      name: String,
      mobile: String,
      pincode: String,
      locality: String,
      address: String,
      city: String,
      state: String,
      landmark: String,
      alternatePhone: String,
      addressType: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

// ✅ SAFE EXPORT TO AVOID DUPLICATE MODEL ERROR
export default mongoose.models.Order || mongoose.model("Order", orderSchema);
