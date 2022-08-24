const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(), 
  password: Joi.string().min(6).required()
}).messages({
  'any.required': '{{#label}} is required', // erro 400
  'string.min': '{{#label}} length must be at least 6 characters long', // erro 422
});

const loginValidate = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return error.details[0].message.includes('required') 
        ? res.status(400).json({ message: error.details[0].message })
        : res.status(422).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { loginValidate };