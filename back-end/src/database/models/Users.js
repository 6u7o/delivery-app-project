'use strict';
import md5 from 'md5';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Sales, { foreignKey: 'user_id', as: 'sales' });
      Users.hasMany(models.Sales, { foreignKey: 'seller_id', as: 'sales' });
    }
  }
  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: false,
    tableName: 'users'
  });

  Users.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.password = md5(user.password);
    }
  });

  return Users;
};
