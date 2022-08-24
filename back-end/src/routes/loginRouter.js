const express = require('express');
const { login } = require('../controllers/loginController');
const { loginValidate } = require('../middlewares/loginValidate');

const loginRouter = express.Router();

loginRouter.post('/', loginValidate, login);

module.exports = loginRouter;
