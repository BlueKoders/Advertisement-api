import { Router } from "express";
import {registerVendor, loginVendor, logoutVendor, getProfile, updateProfile } from "../controllers/vendor.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";



// create routes
const vendorRouter = Router();


// define routes
vendorRouter.post('/vendors/register', registerVendor)

vendorRouter.post('/vendors/login', loginVendor)


vendorRouter.get('/vendors/me', isAuthenticated, hasPermission('get_profile'), getProfile)

vendorRouter.post('/vendors/logout', isAuthenticated, logoutVendor)

vendorRouter.patch('/vendors/me', isAuthenticated, hasPermission('update_profile'), updateProfile)


// export default
export default vendorRouter;
