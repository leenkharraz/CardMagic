const express = require('express');
const mysql = require('mysql2');
const { check, validationResult } = require('express-validator');

const app = express();
const PORT = 2500;

app.use(express.static('website'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // if this doesn’t work, try ''
  database: 'cardmagic'
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

app.post('/subscribe',
  check('email').isEmail().withMessage('Invalid email!'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation error:", errors.array());
      return res.status(400).json({ message: "❌ Invalid email" });
    }

    const { email } = req.body;
    console.log("📩 Received email:", email);

    db.query('INSERT INTO subscribers (email) VALUES (?)', [email], (err) => {
      if (err) {
        console.error("❌ Database insert error:", err);
        return res.status(500).json({ message: '❌ Database error' });
      }
      console.log("✅ Email saved to database.");
      return res.status(200).json({ message: `🎉 Thanks for subscribing, ${email}!` });
    });
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
