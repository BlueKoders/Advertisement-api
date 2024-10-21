import { Router } from "express";
import {registerVendor, loginVendor, logoutVendor, getProfile, updateProfile } from "../controllers/vendor.js";


// create routes
const vendorRouter = Router();


// define routes
vendorRouter.post('/vendors/register', registerVendor)

vendorRouter.post('/vendors/login', loginVendor)

vendorRouter.get('/vendors/me', getProfile)

vendorRouter.post('/vendors/logout', logoutVendor)

vendorRouter.post('/vendors/me', updateProfile)

// export default
export default vendorRouter;