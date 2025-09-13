const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Sohan", email: "sohan@example.com" },
  { id: 2, name: "Dhanshri", email: "dhanshri@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));



