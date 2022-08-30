const { Sales } = require('../database/models');

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

module.exports = {
  getAllOrdersByUserId,
};
