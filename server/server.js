const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
  });
});

// Create and connect to the SQLite database
const db = new sqlite3.Database(":memory:");

// Create the students table
db.serialize(() => {
  db.run(`
    CREATE TABLE students (
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

// API to fetch all students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(rows);
  });
});

// API to add a new student
app.post("/students", (req, res) => {
  const { name, role, email, phone, course, status } = req.body;
  const sql =
    "INSERT INTO students (name, role, email, phone, course, status) VALUES (?, ?, ?, ?, ?, ?)";
  db.run(sql, [name, role, email, phone, course, status], function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ id: this.lastID, name, role, email, phone, course, status });
  });
});

// API to delete a student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM students WHERE id = ?";
  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true });
  });
});

app.listen(port | 5000, () => {
  console.log(`Server running on port ${port}`);
});
