const { Products } = require('../database/models');

const getAllProducts = async () => {
  const arrProducts = await Products.findAll({ raw: true });
  console.log(arrProducts);
  if (!arrProducts) return false;

  return arrProducts;
};

module.exports = {
  getAllProducts,
};
