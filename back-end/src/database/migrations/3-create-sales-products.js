'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        allowNull: false,
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
