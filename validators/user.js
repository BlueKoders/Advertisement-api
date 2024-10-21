import Joi from "joi";

export const userRegisterValidator = Joi.object({
    username: Joi.string().required().min(3),
    email: Joi.string().required(),
    password: Joi.string().required()
})

export const userloginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

