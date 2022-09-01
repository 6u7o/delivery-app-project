const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '8h', // nome das chaves não deve ser alterado;
  algorithm: 'HS256',
};

let jwtSecret;

async function readJwrSecret() {
  try {
    const data = await fs.readFile('jwt.evaluation.key', { encoding: 'utf8' });
    jwtSecret = data;
  } catch (err) {
    console.log(err);
  }
}

const generateToken = async (payload, config = jwtConfig) => {
  await readJwrSecret();
  return jwt.sign(payload, jwtSecret, config);
};

const verifyAndReadToken = async (token) => {
  await readJwrSecret();
  return jwt.verify(token, jwtSecret);
};

module.exports = {
  generateToken,
  verifyAndReadToken,
};
