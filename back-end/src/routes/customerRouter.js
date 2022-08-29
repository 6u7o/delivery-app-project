const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { createSale } = require('../controllers/checkoutController');
const jwtValidateAndRefreshToken = require('../middlewares/jwtValidateAndRefresh.middlewar');

const customerRouter = express.Router();

customerRouter.get('/products', getAllProducts);
customerRouter.post('/checkout', jwtValidateAndRefreshToken, createSale);
// customerRouter.post('/orders/:id', createSale);

module.exports = customerRouter;
