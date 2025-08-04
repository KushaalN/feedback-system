const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/feedbackDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// Serve frontend folder statically
const frontendPath = path.join(__dirname, '../frontend');
console.log("Serving frontend from:", frontendPath);
app.use(express.static(frontendPath));

// API Routes
app.use('/auth', authRoutes);
app.use('/feedback', feedbackRoutes);

// Root route → show login page
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'login.html'));
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
