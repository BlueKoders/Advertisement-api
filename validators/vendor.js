import Joi from "joi";


export const registerVendorValidator= Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email:Joi.string().email().required(),
    phone: Joi.string(),
    location: Joi.string().required(),
    password: Joi.string().required()
});


export const loginVendorValidator = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().required()
})

export const updateProfileValidator = Joi.object({
    firstname: Joi.string(),
    avatar: Joi.string()
});