const express = require('express');
const { getAllProducts } = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/products', getAllProducts);

module.exports = productsRouter;