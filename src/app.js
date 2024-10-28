const express = require("express");
const app = express();
const middleware = require("./app/middleware");

// middleware.forEach((middleware) => {
//   app.use(middleware);
// });
app.use(middleware);

// app.use([notFount, errorHandler]);

module.exports = app;
