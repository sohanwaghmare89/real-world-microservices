const express = require("express");
const app = express();
app.use(express.json());

const payments = [];

app.post("/pay", (req, res) => {
  const { orderId, amount } = req.body;
  const newPayment = { id: payments.length + 1, orderId, amount, status: "SUCCESS" };
  payments.push(newPayment);
  res.status(201).json(newPayment);
});

app.get("/payments", (req, res) => {
  res.json(payments);
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));
