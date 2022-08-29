const checkoutService = require('../services/checkoutService');

const createSale = async (req, res) => {
  console.log('Chegou');
  const response = await checkoutService.createSale(req.body);
  // if (!response) {
  //   throw Error('Not found');
  // } 
  // return res.status(201).json({data: response});
  return res.status(201).json(response);
};

module.exports = {
  createSale,
};
