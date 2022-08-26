const { Sales } = require('../database/models');

const createSale = async (saleInfo) => {
  const newSale = await Sales.create(saleInfo, { raw: true });
  return newSale.dataValues;
};

module.exports = {
  createSale,
};
