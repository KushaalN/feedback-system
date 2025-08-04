# Feedback Collection System

A web-based **Feedback Collection System** that allows users to submit feedback and administrators to manage and analyze responses in real-time.

---

## 🚀 Features

- User registration, login, and secure authentication using JWT.
- Feedback submission with name, email, message, and rating.
- MongoDB database integration for storing feedback securely.
- Responsive frontend with a modern UI using HTML, CSS, and JS.
- Real-time notifications for feedback submissions.
- Administrator panel to view and manage feedback.
- Integration-ready for analytics and external platforms.

---

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT & bcrypt.js  
**Others:** Nodemailer, CORS, Body-parser

---

## 📂 Project Structure

feedback-system/
│
├── backend/
│ ├── models/ # MongoDB Schemas (User, Feedback)
│ ├── routes/ # Auth & Feedback APIs
│ └── server.js # Express server setup
│
├── frontend/
│ ├── login.html
│ ├── register.html
│ ├── feedback.html
│ └── style.css
│
├── LICENSE
└── README.md



cd backend
npm install
net start MongoDB
node server.js



This project is licensed under the MIT License - see the LICENSE file for details.
