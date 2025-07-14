import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),

  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'number.base': 'Phone number must be a number',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),

  email: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least {#limit} characters',
    'string.max': 'Email should have at most {#limit} characters',
    'any.required': 'Email is required',
  }),

  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean value (true or false)',
  }),

  contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
    'string.base': 'Contact type must be a string',
    'any.only': 'Contact type must be one of [work, home, personal]',
    'any.required': 'Contact type is required',
  }),
});


export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.number(),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),

  });


//export const updateContactSchema = Joi.object({
//    name: Joi.string().min(3).max(20).messages({
//      'string.base': 'Username should be a string',
//      'string.min': 'Username should have at least {#limit} characters',
//      'string.max': 'Username should have at most {#limit} characters',
//    }),
//
//    phoneNumber: Joi.number().messages({
//      'number.base': 'Phone number must be a number',
//    }),
//
//    email: Joi.string().email().messages({
//      'string.base': 'Email should be a string',
//      'string.email': 'Email must be a valid email address',
//    }),
//
//    isFavourite: Joi.boolean().messages({
//      'boolean.base': 'isFavourite must be a boolean value (true or false)',
//    }),
//
//    contactType: Joi.string().valid('work', 'home', 'personal').messages({
//      'string.base': 'Contact type must be a string',
//      'any.only': 'Contact type must be one of [work, home, personal]',
//    }),
//});
