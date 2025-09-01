import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Helper to send consistent responses
function sendResponse(res, status, success, message, data = null) {
  return res.status(status).json({ success, message, data });
}

// ======================= REGISTER =======================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, false, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    return sendResponse(res, 201, true, "User registered successfully", {
      id: newUser._id,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
});

// ======================= LOGIN =======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("email password role").lean();
    if (!user) {
      return sendResponse(res, 400, false, "Invalid credentials");
    }
    

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendResponse(res, 400, false, "Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    console.log(Object.keys(user));  // Log all keys to see if 'role' exists
console.log(user);               // Log the entire user object
console.log(user.role);
  
    return sendResponse(res, 200, true, "Login successful", {
      token,
      userId: user._id,
      role: user.role,
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
});

export default router;
