const express = require('express');
const registerController = require('../controllers/register');
const newUserDataMiddleware = require('../middlewares/newUserDataMiddleware.middlewares');

const registerRouter = express.Router();

registerRouter.post('/', newUserDataMiddleware, registerController.createOne);

module.exports = registerRouter;
