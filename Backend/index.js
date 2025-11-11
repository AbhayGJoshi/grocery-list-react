// Backend (Node.js with Express)
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  database: "studentsdb",
  user: "root",
  password: "root123",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM studentsdb.studs");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
app.listen(53000, () => console.log("Backend listening on port 53000"));
