const userServices = require('../services/customerServices');

const getAllOrdersByUserId = async (req, res) => {
  const response = await userServices.getAllOrdersByUserId(req.UserId);
  if (!response) {
    throw Error('Not found');
  } 
  return res.status(200).json({ data: response, token: req.NewToken });
};

const getOrderProducts = async (req, res) => {
  const { orderId } = req.params;
  const response = await userServices.getOrderProducts(req.UserId, orderId);
  if (!response) {
    throw Error('Not found');
  } 
  return res.status(200).json({ data: response, token: req.NewToken });
};

module.exports = {
  getAllOrdersByUserId,
  getOrderProducts
};
