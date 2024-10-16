import { Router } from "express.js";
import {registerVendor, loginVendor, logoutVendor, updateVendor, getProfile } from "../controllers/vendor.js";


// create routes
const vendorRouter = Router();


// define routes
vendorRouter.post('/vendors/register', registerVendor)

vendorRouter.post('/vendors/login', loginVendor)

vendorRouter.get('/vendors/me', getProfile)

vendorRouter.post('/vendors/logout', logoutVendor)

vendorRouter.post('/vendors/me', updateVendor)

// export default
export default vendorRouter;