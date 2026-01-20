const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

// Get all projects
app.get('/api/projects', (req, res) => {
  const sql = "SELECT * FROM projects";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    });
  });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Save to DB
  const sql = 'INSERT INTO messages (name, email, message) VALUES (?,?,?)';
  const params = [name, email, message];
  
  db.run(sql, params, function (err, result) {
    if (err) {
      console.error(err.message);
      // Continue to try sending email even if DB fails? Better to fail? 
      // User request emphasizes email. Let's try to do both.
    }
  });

  // Send Email via Nodemailer
  // NOTE: For Gmail, you often need an App Password if 2FA is on, or allow less secure apps.
  // We will setup the transporter.
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // We will need to set this in .env
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email, // From the user who filled the form
      to: 'giftihussein64@gmail.com', // Target email
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    
    res.json({
      "message": "success",
      "data": "Message sent and emailed"
    });

  } catch (error) {
    console.error("Email send failed:", error);
    // Still return success if DB saved? Or warn?
    // For now, let's warn but say success if DB worked, or 500 if email critical.
    // User wants email specifically.
    res.status(500).json({ "error": "Failed to send email", "details": error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
