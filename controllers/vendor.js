import { json } from "express";
import { VendorModel } from "../models/vendor.js";
import { registerVendorValidator, loginVendorValidator } from "../validators/vendor.js";
import bcrypt from "bcryptjs";



export const registerVendor =(req, res, next) => {
  try {
      // validate vendor input
      const {error, value } = registerVendorValidator.validate(req.body);
      if (error){
        return res.status(422).json(error);
      }
      // check if vendor does not exist
      // hash their password
      // save vendor confirmation email
      // send confirmation email
      // respond to request
      res.json('vendor registered');
  } catch (error) {
    next(error)
    
  }
}

export const  loginVendor = (req, res, next) => {
    res.json('vendor logged in successfully');
}


export const getProfile = (req, res, next) => {
    res.json('user profile')
}

export const logoutVendor = (req, res, next) => {
    res.json('vendor logged out successfully');
}


export const updateVendor = (req, res, next) => {
    res.json('vendor profile was updated');
}