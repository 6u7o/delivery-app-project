const sellerService = require('../services/sellerService');

const updateOrderStatus = async (req, res) => {
  const { newStatus } = req.body;
  const { orderId } = req.params;
  console.log('entrou');
  // da pra fazer uma condição aqui para vetar algumas alteração de status que não fazem sentido
  const response = await sellerService.updateOrderStatus(orderId, newStatus);
  if (!response) {
    throw Error('Not found');
  } 
  return res.status(201).json({ data: response });
};

module.exports = {
  updateOrderStatus,
};
