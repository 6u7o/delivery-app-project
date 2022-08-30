const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { createSale } = require('../controllers/checkoutController');
const jwtValidateAndRefreshToken = require('../middlewares/jwtValidateAndRefresh.middlewar');
const postNewSaleMiddleware = require('../middlewares/postNewSaleMiddleware.middlewares');
const customerController = require('../controllers/customerController');

const customerRouter = express.Router();

customerRouter.get('/products', getAllProducts);
customerRouter.post('/checkout', jwtValidateAndRefreshToken, postNewSaleMiddleware, createSale);
customerRouter.get('/orders/',
  jwtValidateAndRefreshToken,
  customerController.getAllOrdersByUserId);
customerRouter.get('/orders/:orderId', jwtValidateAndRefreshToken, customerController.getOrderProducts);


module.exports = customerRouter;
