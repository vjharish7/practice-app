const express = require("express");
const app = express();
app.use(express.json());

// Your users list — same as Month 1
const users = [
  { id: 1, username: "theharmony", followerCount: 10 },
  { id: 2, username: "vjharish7", followerCount: 25 },
];

// GET /users — return all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET /users/:id — return one user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.json(user);
});

// POST /users — create a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    followerCount: 0
  };
  users.push(newUser);
  res.json(newUser);
});

// DELETE /users/:id — delete a user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

// Start the server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});