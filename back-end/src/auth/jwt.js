const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtConfig = {
  expiresIn: '30m', // nome das chaves não deve ser alterado;
  algorithm: 'HS256',
};

const jwtSecret = process.env.JWT_SECRET || 'Swordfish';

const generateToken = (payload, config = jwtConfig) => (
  jwt.sign(payload, jwtSecret, config)
);

const verifyAndReadToken = (token) => (
  jwt.verify(token, jwtSecret)
);

module.exports = {
  generateToken,
  verifyAndReadToken,
};
