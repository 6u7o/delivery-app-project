const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { createSale } = require('../controllers/checkoutController');
const jwtValidateAndRefreshToken = require('../middlewares/jwtValidateAndRefresh.middlewar');
const postNewSaleMiddleware = require('../middlewares/postNewSaleMiddleware.middlewares');
const costumerController = require('../controllers/customerController');

const customerRouter = express.Router();

customerRouter.get('/products', getAllProducts);
customerRouter.post('/checkout', jwtValidateAndRefreshToken, postNewSaleMiddleware, createSale);
customerRouter.get('/orders/',
  jwtValidateAndRefreshToken,
  costumerController.getAllOrdersByUserId);

module.exports = customerRouter;
