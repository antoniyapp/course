const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const productRouter = require("./routes/productsRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/ordersRoutes");

mongoose.Promise = global.Promise;
const mongooseUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/online-shop-api";
mongoose.connect(mongooseUrl, () => {
  console.log("Connected to db");
});

const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.listen(9000, () => {
  console.log(`Server started on port 9000`);
});

module.exports = app;