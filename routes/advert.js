import { Router } from "express";
import {addAdvert, countAdverts, deleteAdvert, getAdverts, updateAdvert} from "../controllers/advert.js";



// create a router
const advertRouter = Router();

// define routes
advertRouter.get('/adverts/count', countAdverts)

advertRouter.post('/adverts', addAdvert)

advertRouter.get('/adverts/:id');

advertRouter.get('/adverts', getAdverts);

advertRouter.patch('/adverts/:id', updateAdvert);

advertRouter.delete('/adverts/:id', deleteAdvert);


// export router
export default advertRouter;