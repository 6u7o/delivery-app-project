const express = require('express');
const jwtValidateAndRefreshToken = require('../middlewares/jwtValidateAndRefresh.middlewar');
const customerController = require('../controllers/customerController');
const sellerController = require('../controllers/sellerController');

const salesRouter = express.Router();

salesRouter.get('/',
  jwtValidateAndRefreshToken,
  customerController.getAllOrdersByUserId);
salesRouter.get('/:orderId',
  jwtValidateAndRefreshToken,
  customerController.getOrderProducts);
salesRouter.patch('/:orderId',
  jwtValidateAndRefreshToken,
  sellerController.updateOrderStatus);

module.exports = salesRouter;
