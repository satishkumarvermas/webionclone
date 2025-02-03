const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./students.db', (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Create the students table (run only once)
db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    status TEXT NOT NULL
  );
`);

module.exports = db;
