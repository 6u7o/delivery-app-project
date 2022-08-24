import md5 from 'md5';
require('express-async-errors');
const { Users } = require('../database/models');

const login = async (email, password) => {
    const userI = await Users.findOne({
      attributes: ['id', 'email'],
      where: { email, password },
    });
    if (!userI) return false;

    const passwordMd5 = md5(userI.dataValues.password);
    if (userI.dataValues.password !== passwordMd5) {
      return false;
    }
    
    const token = generateJWTToken(userI.dataValues);
    return token;
};

module.exports = {
  login,
};