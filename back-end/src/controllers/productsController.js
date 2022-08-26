// const Joi = require('joi');
const productsService = require('../services/productsService');

const getAllProducts = async (req, res) => {
  const response = await productsService.getAllProducts();
  if (!response) {
    throw Error('Not found');
  } 
  return res.status(200).json({data: response});
};

module.exports = {
  getAllProducts,
};
