const express = require('express');
const { getImagesByName } = require('../controllers/imagesController');

const customerRouter = express.Router();

customerRouter.get('/:productName', express.static('public'));

module.exports = customerRouter;
