const express = require("express");
const jwt = require("jsonwebtoken");
const Feedback = require("../models/Feedback");

const router = express.Router();
const SECRET = "secret123"; // Same as authRoutes

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Submit feedback (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, email, feedback, rating } = req.body;
    const newFeedback = new Feedback({ name, email, feedback, rating });
    await newFeedback.save();
    res.json({ message: "Feedback submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
