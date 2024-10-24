import { Router } from "express";
import {registerVendor, loginVendor, logoutVendor, getProfile, updateProfile, getVendorAdverts } from "../controllers/vendor.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";



// create routes
const vendorRouter = Router();


// define routes
vendorRouter.post('/vendors/register', registerVendor) //TESTING SUCCESSFUL
vendorRouter.post('/vendors/login', loginVendor) //TESTING SUCCESSFUL
vendorRouter.get('/vendors/me', isAuthenticated, hasPermission('get_profile'), getProfile) //TESTING SUCCESSFUL
vendorRouter.get('/vendors/me/adverts', isAuthenticated, getVendorAdverts)
vendorRouter.post('/vendors/logout', isAuthenticated, logoutVendor) //TESTING SUCCESSFUL
vendorRouter.patch('/vendors/me/:id', isAuthenticated, hasPermission('update_profile'), updateProfile)//TESTING SUCCESSFUL



// export default
export default vendorRouter;
