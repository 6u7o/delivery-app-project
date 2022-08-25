const express = require('express');
// const cors = require("cors");
require('express-async-errors');
const appRouter = require('../routes');
const errorMiddleware = require('../middlewares/errors/errorMiddleware.middlewares');

const app = express();

const allowCrossDomain = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

// app.use(cors()); // caso vá utilizar o cors, é necessário reinstalar esse
app.use(allowCrossDomain);
app.use(express.json());
app.use(appRouter);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);

module.exports = app;
