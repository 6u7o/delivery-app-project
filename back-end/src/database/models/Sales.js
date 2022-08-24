"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sales.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user'});
      Sales.belongsTo(models.Users, {foreignKey: 'seller_id', as: 'user'});

      Sales.hasMany(models.SalesProducts, {foreignKey: 'sale_id', as: 'salesProducts'});
    }
  }
  Sales.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      saleDate: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Sales",
      tableName: "sales",
      timestamps: false,
      underscored: true,
    }
  );

  return Sales;
};
