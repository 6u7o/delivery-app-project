const md5 = require('md5');
const { Users } = require('../../database/models');
const { generateToken } = require('../../auth/jwt');

const createOne = async (userData) => {
  const userDbData = (await Users.create(
    {
      name: userData.name,
      email: userData.email,
      password: md5(userData.password),
    },
    {
      raw: true,
      attributes: ['name', 'email', 'role'],
    },
  )).get();

  if (!userDbData) return false;

  const { email, name, role } = userDbData;

  const token = generateToken(userDbData);

  return { email, name, role, token };
};

module.exports = createOne;
