'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.SalesProducts, { foreignKey: 'product_id', as: 'salesProducts' })
    }
  }
  Products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.VARCHAR(100),
      unique: true,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      defaultValue: 0,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.VARCHAR(200),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });
  return Products;
};
