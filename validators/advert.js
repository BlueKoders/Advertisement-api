import Joi from "joi";


export const addAdvertValidator = Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required()
});


export const updateAdvertValidator = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    price: Joi.string()
});