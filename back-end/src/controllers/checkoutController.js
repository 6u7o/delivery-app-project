const checkoutService = require('../services/checkoutService');

const createSale = async (req, res) => {
  console.log('Chegou');
  const { saleData, products } = req.body;
  const response = await checkoutService.createSale({ ...saleData, userId: 3, products });
  // if (!response) {
  //   throw Error('Not found');
  // } 
  // return res.status(201).json({data: response});
  return res.status(201).json(response);
};

module.exports = {
  createSale,
};
