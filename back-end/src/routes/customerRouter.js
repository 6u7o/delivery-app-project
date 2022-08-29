const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { createSale } = require('../controllers/checkoutController');

const customerRouter = express.Router();

customerRouter.get('/products', getAllProducts);
customerRouter.post('/checkout', createSale);
// customerRouter.post('/orders/:id', createSale);

module.exports = customerRouter;