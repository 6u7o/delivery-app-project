const express = require('express');
const { getAllUsers, newUser, deleteUser } = require('../controllers/adminController');

const adminRouter = express.Router();

adminRouter.get('/users', getAllUsers);
adminRouter.post('/new-user', newUser);
adminRouter.delete('/:id', deleteUser);

module.exports = adminRouter;
