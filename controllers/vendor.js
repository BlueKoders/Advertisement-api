import { VendorModel } from "../models/vendor.js";
import { registerVendorValidator, loginVendorValidator, updateProfileValidator } from "../validators/vendor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"



export const registerVendor = async (req, res, next) => {
  try {
    // validate vendor input
    const { error, value } = registerVendorValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // check if vendor does not exist
    const vendor = await VendorModel.findOne({
      email: value.email
    });
    if (vendor) {
      return res.status(409).json('vendor already exist');
    }
    // hash their password
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // save vendor confirmation email
    await VendorModel.create({
      ...value,
      password: hashedPassword
    });
    // send confirmation email
    // respond to request
    res.json('vendor registered');
  } catch (error) {
    next(error);
  }
}

export const loginVendor = async (req, res, next) => {
  try {
    //  Validate vendor input
    const { error, value } = loginVendorValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    // Find one vendor with identifier
    const vendor = await VendorModel.findOne({
      email: value.email
    });
    if (!vendor) {
      return res.status(404).json('vendor does not exist');
    }

    // compare their passwords
    const correctPassword = bcrypt.compareSync(value.password, vendor.password);
    if (!correctPassword) {
      return res.status(401).json('Invalid credentials');
    }
    // sign a token for user
    const token = jwt.sign(
      { id: vendor.id },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: '24h' }
    )
    // Respond to request
    res.json({
      message: 'vendor logged in',
      accessToken: token
    });
  } catch (error) {
    next(error);

  }
}


export const getProfile = async (req, res, next) => {
  try {
    // find authenticated vendor from database
    const vendor = await VendorModel
      .findById(req.auth.id)
      .select({ password: false });
    // respond to request
    res.json(vendor);
  } catch (error) {
    next(error);
  }
}

export const logoutVendor = (req, res, next) => {
  res.json('vendor logged out successfully');
}


export const updateProfile = async (req, res, next) => {
  try {
    // validate vendor input
    const { error, value } = updateProfileValidator.validate({
      ...req.body,
      // profile avatar not in use
      // avatar: req.file?.filename
    });
    if (error) {
      return res.status(422).json(error);
    }
    // update vendor
    await VendorModel.findByIdAndUpdate(req.auth.id, value);
    // respond to request
    res.json('Vendor profile updated');
  } catch (error) {
    next(error);

  }
}