import Joi from "joi";


export const registerVendorValidator= Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    email:Joi.string().email().required(),
    password: Joi.string().required()
});


export const loginVendorValidator = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().required()
})
