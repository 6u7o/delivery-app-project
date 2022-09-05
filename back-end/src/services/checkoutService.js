const { Sales, SalesProducts, sequelize } = require('../database/models');
// const Sequelize = require('../database/models');

const createSale = async (saleInfo) => {
  const transaction = await sequelize.transaction();
  try {
    const newSale = await Sales.create(saleInfo, {
      raw: true,
      transaction,
      fields: ['sellerId', 'totalPrice', 'deliveryAddress', 'deliveryNumber', 'userId'],
    });

    const formatedProducts = saleInfo.products.map(({ id, quantity }) => (
      { saleId: newSale.id, productId: id, quantity }
    ));

    await SalesProducts.bulkCreate(formatedProducts, { transaction });
    
    await transaction.commit();
    return newSale.dataValues;
  } catch (error) {
    console.log('catch: ***', error.message);
    await transaction.rollback();
  }
};

module.exports = {
  createSale,
};
