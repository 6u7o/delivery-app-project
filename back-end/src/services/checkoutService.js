const { Sales, sequelize } = require('../database/models');
// const Sequelize = require('../database/models');

const createSale = async (saleInfo) => {
  const transaction = await sequelize.transaction();

  try {
    const newSale = await Sales.create(saleInfo, { raw: true, transaction });
    console.log('Chegou aqui', newSale.dataValues);  
    return newSale.dataValues;
  } catch (error) {
    await transaction.rollback();
  }
  
};

module.exports = {
  createSale,
};
