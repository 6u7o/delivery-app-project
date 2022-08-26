// const Joi = require('joi');
const registerService = require('../../services/register');

const createOne = async (req, res) => {
  const { email, password, name } = req.body;
  const response = await registerService.createOne({ email, password, name });
  if (!response) {
    return res.status(404).json({ message: 'Not found' });
    // throw Error('Not found');
  } 

  return res.status(201).json({ ...response });
};

module.exports = createOne;
