const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ activeStatus: true });
});

// Persistent SQLite database
const db = new sqlite3.Database("./students.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Create students table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT,
      email TEXT,
      phone TEXT,
      course TEXT,
      status TEXT
    )
  `);
});

// Fetch all students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

// Add a new student
app.post("/students", (req, res) => {
  const { name, role, email, phone, course, status } = req.body;
  const sql = `INSERT INTO students (name, role, email, phone, course, status) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(sql, [name, role, email, phone, course, status], function (err) {
    if (err) return res.status(500).send(err);
    res.json({ id: this.lastID, name, role, email, phone, course, status });
  });
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM students WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).send(err);
    res.json({ success: true });
  });
});

app.listen(port || 5000, () => {
  console.log(`Server running on port ${port}`);
});
