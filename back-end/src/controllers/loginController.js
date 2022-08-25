// const Joi = require('joi');
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.login(email, password);
  if (!response) {
    throw Error('Not found');
  } 
  return res.status(200).json(response);
};

module.exports = {
  login,
};
