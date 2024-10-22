import { Router } from "express";
import {addAdvert, countAdverts, deleteAdvert, getAdverts, updateAdvert} from "../controllers/advert.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { advertImageUpload } from "../middlewares/uploads.js";



// create a router
const advertRouter = Router();

// define routes
advertRouter.get('/adverts/count', countAdverts)

advertRouter.post('/adverts', advertImageUpload.single('image'), isAuthenticated, addAdvert)

advertRouter.get('/adverts/:id');

advertRouter.get('/adverts', getAdverts);

advertRouter.patch('/adverts/:id', isAuthenticated, updateAdvert);

advertRouter.delete('/adverts/:id', deleteAdvert);


// export router
export default advertRouter;