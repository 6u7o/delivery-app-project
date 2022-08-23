'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SalesProducts.belongsTo(models.Sales, {foreignKey: 'sale_id', as: 'sale' });

      SalesProducts.belongsTo(models.Products, {foreignKey: 'product_id', as: 'product' })
    }
  }
  SalesProducts.init({
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'SalesProducts',
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });
  return SalesProducts;
};
