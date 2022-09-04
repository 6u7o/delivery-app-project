const Joi = require('joi');

const newUserDataSchema = Joi.object({
  saleData: Joi.object({
    sellerId: Joi.number().min(1).required(),
    totalPrice: Joi.number().min(0.00).required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().min(1).required(),
  }),
  products: Joi.array().items(Joi.object({
    id: Joi.number().min(1).required(),
    quantity: Joi.number().min(1).required(),
    unitPrice: Joi.number(),
    product: Joi.string(),
    totalPrice: Joi.number(),
  })),
}).messages({
  'any.required': '{{#label}} is required///400',
  'number.min': '{{#label}} length must be at least 1 characters long///422', 
  'string.base': '{{#label}} must be a string///422',
  'number.base': '{{#label}} must be a number///422',
});

module.exports = newUserDataSchema;
