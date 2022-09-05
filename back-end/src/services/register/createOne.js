const { Users } = require('../../database/models');
const { generateToken } = require('../../auth/jwt');

const createOne = async (userData) => {
  const userDbData = (await Users.create(
    {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
    {
      raw: true,
      attributes: ['name', 'email', 'role'],
    },
  )).get();

  if (!userDbData) return false;

  const { email, name, role, id } = userDbData;

  const token = await generateToken(userDbData);

  return { id, email, name, role, token };
};

module.exports = createOne;
