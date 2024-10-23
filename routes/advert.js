import { Router } from "express";
import {addAdvert, countAdverts, deleteAdvert, getAdvert, getAdverts, updateAdvert, } from "../controllers/advert.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";
import { advertImageUpload } from "../middlewares/uploads.js";



// create a router
const advertRouter = Router();

// define routes
advertRouter.get('/adverts/count', countAdverts) //NOT TO BE TESTED// PROBABLY NOT SURE

advertRouter.post('/adverts', advertImageUpload.single('image'), isAuthenticated, hasPermission('add_ads'), addAdvert)// TESTING SUCCESSFUL

advertRouter.get('/adverts/:id', getAdvert); //TESTING SUCCESSFUL

advertRouter.get('/adverts', getAdverts);//TESTING SUCCESSFUL

advertRouter.patch('/adverts/:id', isAuthenticated, hasPermission('update_ads'), updateAdvert); //TESTING FAILED 401

advertRouter.delete('/adverts/:id', isAuthenticated, hasPermission('delete_ads'), deleteAdvert);


// export router
export default advertRouter;