import { Router } from "express";
import {addAdvert, countAdverts, deleteAdvert, getAdvert, getAdverts, updateAdvert, } from "../controllers/advert.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";
import { advertImageUpload } from "../middlewares/uploads.js";



// create a router
const advertRouter = Router();

// define routes
advertRouter.get('/adverts/count', countAdverts) //NOT TO BE TESTED// PROBABLY NOT SURE

advertRouter.post('/adverts', advertImageUpload.single('image'), isAuthenticated, hasPermission('add_ads'), addAdvert)// TEST SUCCESSFUL

advertRouter.get('/adverts/:id', getAdvert); //TEST FAILED

advertRouter.get('/adverts', getAdverts);//TEST SUCCESSFUL

advertRouter.patch('/adverts/:id', isAuthenticated, hasPermission('update_ads'), updateAdvert); //TEST FAILED

advertRouter.delete('/adverts/:id', isAuthenticated, hasPermission('delete_ads'), deleteAdvert);


// export router
export default advertRouter;