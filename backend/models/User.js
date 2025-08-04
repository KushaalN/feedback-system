const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // add email for login
    password: { type: String, required: true }, // will be hashed
    role: { type: String, default: "user" } // can be "user" or "admin"
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
