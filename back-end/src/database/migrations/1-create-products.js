'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      price: {
        type: Sequelize.DECIMAL(4, 2),
        defaultValue: 0,
        allowNull: false,
      },
      urlImage: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'url_image',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
