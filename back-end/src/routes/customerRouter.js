const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { createSale } = require('../controllers/checkoutController');
const { getSellers } = require('../controllers/customerController');
const jwtValidateAndRefreshToken = require('../middlewares/jwtValidateAndRefresh.middlewar');
const postNewSaleMiddleware = require('../middlewares/postNewSaleMiddleware.middlewares');

const customerRouter = express.Router();

customerRouter.get('/products', getAllProducts);
customerRouter.post('/checkout', jwtValidateAndRefreshToken, postNewSaleMiddleware, createSale);
customerRouter.get('/checkout', jwtValidateAndRefreshToken, getSellers);

module.exports = customerRouter;
