const { Sales } = require('../database/models');

const updateOrderStatus = async (orderId, newStatus) => {
  const product = await Sales.update({ status: newStatus }, { where: { id: orderId } });
  console.log(product);
  if (!product) return false;

  return product;
};

module.exports = {
  updateOrderStatus,
};
