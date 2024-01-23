const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(1).max(15).required(),
});

const updateContactSchema = Joi.object({
  name: Joi.string().min(1),
  email: Joi.string().email(),
  phone: Joi.string().min(1).max(15),
});

module.exports = { createContactSchema, updateContactSchema };
