// Add this at the VERY TOP of your test.js BEFORE requiring mongoose
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const mongoose = require("mongoose");
require("dotenv").config();

console.log("Testing MongoDB connection...");
console.log("URI:", process.env.MONGO_URI.replace(/IAmDeath/, "********")); // Hide password

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
        process.exit();
    })
    .catch((err) => {
        console.log("❌ Connection Failed!");
        console.log("Error:", err.message);
        process.exit();
    });