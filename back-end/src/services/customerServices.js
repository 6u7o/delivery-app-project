const { Sales, Products, Users } = require('../database/models');

const getAllOrdersByUserId = async (id, role) => {
  let userType = 'userId';
  if (role === 'seller') {
    userType = 'sellerId';
  }
  const arrUserOrders = await Sales.findAll({
    where: { [userType]: id },
    raw: true,
    // include: [
    //   { model:  } // incluir produtos
    // ]
  });
  if (!arrUserOrders) return false;

  return arrUserOrders;
};

const getOrderProducts = async (orderId) => {
  const arrUserOrders = await Sales.findOne({
    where: { id: orderId },
    // raw: true,
    include: [
      {
        model: Products,
        as: 'products',
        through: { attributes: ['quantity'] },
      },
      {
        model: Users,
        as: 'seller',
        attributes: { exclude: ['password', 'email'] },
      },
    ],
  });
  if (!arrUserOrders) return false;

  return arrUserOrders;
};

const getSellers = async () => {
  const allSellers = await Users.findAll({
    where: { role: 'seller' },
    // raw: true,
  });
  if (!allSellers) return false;

  return allSellers;
};

module.exports = {
  getAllOrdersByUserId,
  getOrderProducts,
  getSellers,
};
