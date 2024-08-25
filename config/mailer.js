const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = transporter;
