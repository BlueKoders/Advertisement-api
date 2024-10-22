import { Router } from "express";
import {registerVendor, loginVendor, logoutVendor, getProfile, updateProfile } from "../controllers/vendor.js";
import { isAuthenticated } from "../middlewares/auth.js";


// create routes
const vendorRouter = Router();


// define routes
vendorRouter.post('/vendors/register', registerVendor)

vendorRouter.post('/vendors/login', loginVendor)

vendorRouter.get('/vendors/me', isAuthenticated, getProfile)

vendorRouter.post('/vendors/logout', isAuthenticated, logoutVendor)

vendorRouter.post('/vendors/me', isAuthenticated, updateProfile)

// export default
export default vendorRouter;