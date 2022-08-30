const { Sales, Products } = require('../database/models');

const getAllOrdersByUserId = async (userId) => {
  const arrUserOrders = await Sales.findAll({
    where: { userId },
    raw: true,
    // include: [
    //   { model:  } // incluir produtos
    // ]
  });
  if (!arrUserOrders) return false;

  return arrUserOrders;
};

const getOrderProducts = async (userId, orderId) => {
  const arrUserOrders = await Sales.findOne({
    where: { id: orderId, userId },
    // raw: true,
    include: [
      {
        model: Products,
        as: 'products',
        through: { attributes: ['quantity'] },
      },
    ],
  });
  if (!arrUserOrders) return false;

  return arrUserOrders;
};

module.exports = {
  getAllOrdersByUserId,
  getOrderProducts,
};
