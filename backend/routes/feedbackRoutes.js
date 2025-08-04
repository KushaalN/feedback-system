const express = require("express");
const jwt = require("jsonwebtoken");
const Feedback = require("../models/Feedback");

const router = express.Router();
const SECRET = "secret123"; // same as auth

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

// Submit feedback
router.post("/submit", authMiddleware, async (req, res) => {
    console.log("Received POST /feedback/submit");
    console.log("Body:", req.body);

    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error("Error saving feedback:", error);
        res.status(500).json({ error: error.message });
    }
});

// Get all feedbacks (Admin)
router.get("/all", async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ date: -1 });
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post("/submit", async (req, res) => {
    try {
        console.log("Incoming feedback:", req.body); // 👀 check if frontend sent data
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error("Error saving feedback:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
