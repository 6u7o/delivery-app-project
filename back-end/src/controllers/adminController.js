const adminService = require('../services/adminService');

const newUser = async (req, res) => {
  const { email, password, name, role } = req.body;
  const response = await adminService.newUser({ email, password, name, role });
  if (!response) {
    return res.status(404).json({ message: 'Not found' });
  } 

  return res.status(201).json({ ...response });
};

const getAllUsers = async (req, res) => {
  const response = await adminService.getAllUsers();
  if (!response) {
    return res.status(404).json({ message: 'Not found' });
  } 

  return res.status(200).json(response);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const response = await adminService.deleteUser(id);
  if (!response) {
    return res.status(404).json({ message: 'Not found' });
  } 

  return res.status(201).json(response);
};

module.exports = { newUser, getAllUsers, deleteUser };
