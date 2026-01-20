const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database ' + dbPath + ': ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create Projects Table
    db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      image_url TEXT,
      link TEXT,
      tags TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating projects table:', err.message);
      } else {
        // Seed Data if empty
        db.get("SELECT count(*) as count FROM projects", (err, row) => {
          if (row.count === 0) {
            console.log("Seeding projects...");
            const insert = 'INSERT INTO projects (title, description, image_url, link, tags) VALUES (?,?,?,?,?)';
            db.run(insert, [
              "MGSA Official Website",
              "Official website for MGSA. A comprehensive platform for the organization.",
              "https://via.placeholder.com/600x400", 
              "#", 
              "React,Node.js,Web Design"
            ]);
            db.run(insert, [
              "Haramaya University Clinic Management System",
              "A full-stack management system for the university clinic, handling patient records and appointments.",
              "https://via.placeholder.com/600x400", 
              "#", 
              "Fullstack,Database,System Design"
            ]);
          }
        });
      }
    });

    // Create Messages Table
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating messages table:', err.message);
      }
    });
  }
});

module.exports = db;
