const express = require('express');
import appRouter from '../routes';

const app = express();
app.use(appRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
