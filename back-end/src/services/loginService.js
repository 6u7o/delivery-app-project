const md5 = require('md5');
const { Users } = require('../database/models');
const { generateToken } = require('../auth/jwt');

const login = async (email, password) => {
  const passwordHash = md5(password);

  const userI = await Users.findOne({
    attributes: ['id', 'email', 'name', 'role'],
    where: { email, password: passwordHash },
    raw: true,
  });

  if (!userI) return false;

  const token = generateToken(userI);
  return token;
};

module.exports = {
  login,
};
