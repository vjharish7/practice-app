require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "theharmony",
  password: "password123",
  host: "localhost",
  port: 5432,
  database: "practiceapp"
});

// GET /users — fetch all users
app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

// POST /users — create a user
app.post("/users", async (req, res) => {
  const { username, email } = req.body;
  const result = await pool.query(
    "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
    [username, email]
  );
  res.json(result.rows[0]);
});

// DELETE /users/:id — delete a user
app.delete("/users/:id", async (req, res) => {
  await pool.query("DELETE FROM users WHERE id = $1", [req.params.id]);
  res.json({ message: "User deleted" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});