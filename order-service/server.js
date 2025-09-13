const express = require("express");
const app = express();
app.use(express.json());

const orders = [
  { id: 1, userId: 1, productId: 2, quantity: 1 },
  { id: 2, userId: 2, productId: 1, quantity: 2 },
];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  const newOrder = { id: orders.length + 1, ...req.body };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
