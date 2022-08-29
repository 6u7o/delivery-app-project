const checkoutService = require('../services/checkoutService');

const createSale = async (req, res) => {
  const { saleData, products } = req.body;
  const response = await checkoutService.createSale({ ...saleData, userId: req.UserId, products });
  // if (!response) {
  //   throw Error('Not found');
  // } 
  // return res.status(201).json({data: response});
  return res.status(201).json({ data: response });
};

module.exports = {
  createSale,
};
