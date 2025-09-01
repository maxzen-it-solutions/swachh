// routes/userRoutes.js
import express from "express";
import  auth  from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// ✅ Get all saved addresses
router.get("/addresses", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user?.addresses || []);  // always return array
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ Add new address
router.post("/addresses", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const newAddress = {
      name: req.body.name,
      mobile: req.body.mobile,
      pincode: req.body.pincode,
      locality: req.body.locality,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      landmark: req.body.landmark || "",
      alternatePhone: req.body.alternatePhone || "",
      addressType: req.body.addressType || "Home",
    };

    const savedAddress = user.addresses.create(newAddress); // create subdocument
    user.addresses.push(savedAddress);
    await user.save();

    res.status(201).json(savedAddress); // <-- return the newly saved address
  } catch (err) {
    console.error("Error saving address:", err);
    res.status(400).json({ error: "Invalid address data" });
  }
});


// ✅ Delete address
router.delete("/addresses/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.addresses.id(req.params.id).remove();
    await user.save();
    res.json(user.addresses);
  } catch (err) {
    res.status(400).json({ error: "Error deleting address" });
  }
});

export default router;
