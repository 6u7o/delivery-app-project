const joi = require('joi');

const newUserDataSchema = joi.object({
  name: joi.string().min(12).required(),
  email: joi.string().email().required()
    .messages({
      'string.email': 'invalid email///422',
    }),
  password: joi.string().min(6).required()
    .messages({
      'string.min': '{{#label}} length must be at least 6 characters long///422' }),
}).messages({
  'any.required': '{{#label}} is required///400',
  'string.min': '{{#label}} length must be at least 3 characters long///422', 
  'string.base': '{{#label}} must be a string///422',
});

module.exports = newUserDataSchema;
