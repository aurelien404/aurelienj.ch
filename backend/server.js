require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// GET all contacts
app.get('/users', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new contact
app.post('/users', (req, res) => {
  const { firstName, lastName, tel, email } = req.body;
  const sql = 'INSERT INTO contacts (firstName, lastName, tel, email) VALUES (?, ?, ?, ?)';
  const values = [firstName, lastName, tel, email];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Contact added successfully', id: result.insertId });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});