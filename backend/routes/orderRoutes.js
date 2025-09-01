// routes/orderRoutes.js
import express from "express";
import Order from "../models/order.js";
import User from "../models/User.js";
import auth from "../middleware/auth.js";


const router = express.Router();

// ✅ Get all orders (Admin ideally)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Place new order
router.post("/", auth, async (req, res) => {
  try {
    let { items, totalAmount, addressId, address } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No items in order" });
    }

    // 📌 Case 1: If `addressId` is provided → use saved address
    let finalAddress = null;
    if (addressId) {
      const user = await User.findById(req.user.id);
      const savedAddress = user.addresses.id(addressId); // subdocument
      if (!savedAddress) {
        return res.status(404).json({ error: "Address not found" });
      }
      finalAddress = savedAddress;
    }

    // 📌 Case 2: If `address` object is directly provided → use that
    else if (address) {
      finalAddress = address;
    } else {
      return res.status(400).json({ error: "Delivery address required" });
    }

    // ✅ Save order
    const order = new Order({
      user: req.user.id,
      items,
      totalAmount,     // ⚡ matches schema
      address: finalAddress,
      status: "Pending",
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    console.error("Order Save Error:", err.message);

    res.status(400).json({ error: "Invalid order data" });
  }
});

router.delete("/:id", async (req, res) => {
  console.log("Delete order called with id:", req.params.id);
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
   await Order.deleteOne({ _id: req.params.id });

    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});






export default router;
