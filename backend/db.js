const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB", {
    serverSelectionTimeoutMS: 5000 // 5 sec timeout
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));
