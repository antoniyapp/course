const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const productRouter = require("./routes/productsRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/ordersRoutes");
const contactFormRouter = require("./routes/contactFormRoutes");


const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contact", contactFormRouter);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {err}
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  });
}

// Initialize DB
mongoose.Promise = global.Promise;
const mongooseUrl =  (process.env.MONGODB_URI || "mongodb://localhost:27017/online-shop-api");
mongoose.connect(mongooseUrl, () => {
  console.log("Connected to db");
});


app.listen(9000, (err) => {
  if (err) throw err;
  console.log(`Server started on port 9000`);
});

module.exports = app;