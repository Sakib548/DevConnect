const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// const User = require("./models/User");

// const testUser = new User({
//   name: "Test User",
//   email: "test@example.com",
//   password: "password123",
// });

// testUser
//   .save()
//   .then(() => console.log("Test user saved"))
//   .catch((err) => console.error("Error saving test user:", err));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
