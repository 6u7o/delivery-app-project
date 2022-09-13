const { Users } = require('../database/models');

const newUser = async (userData) => {
  const userDbData = (await Users.create(
    {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    },
    {
      raw: true,
      attributes: ['name', 'email', 'role'],
    },
  )).get();

  if (!userDbData) return false;

  const { email, name, role, id } = userDbData;

  return { id, email, name, role };
};

const getAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const deleteUser = async (userId) => {
  const data = Users.destroy({
    where: {
      id: userId,
    },
  });

  if (!data) return false;

  return data;
};

module.exports = { newUser, getAllUsers, deleteUser };
