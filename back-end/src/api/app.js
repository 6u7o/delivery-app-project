const express = require('express');
const appRouter = require('../routes');
require('express-async-errors');
const errorMiddleware = require('../middlewares/errors/errorMiddleware.middlewares');

const app = express();
app.use(express.json());
app.use(appRouter);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);

module.exports = app;
