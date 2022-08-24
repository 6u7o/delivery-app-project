import * as jwt from 'jsonwebtoken';

require('dotenv').config();

const jwtConfig = {
  expiresIn: '30m', // nome das chaves não deve ser alterado;
  algorithm: 'HS256',
};

const jwtSecret = process.env.JWT_SECRET || 'Swordfish';

export const generateToken = (payload, config = jwtConfig) => (
  jwt.sign(payload, jwtSecret, config)
);

export const verifyAndReadToken = (token) => (
  jwt.verify(token, jwtSecret)
);

export default {
  generateToken,
  verifyAndReadToken,
};
