const express = require('express');

const customerRouter = express.Router();

customerRouter.get('/:productName', express.static('public'));

module.exports = customerRouter;
