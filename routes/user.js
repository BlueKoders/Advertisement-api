//import express router
import { Router } from "express";
import { userAds, userRegister, userLogin, userLogout, userAd } from "../controllers/user.js";
import { isAuthenticated, userHasPermission } from "../middlewares/auth.js";


//create a router
const userRouter = Router();

//define user routes : get all and get one
userRouter.get('/users/ads', userAds);
userRouter.get('./users/:id', userAd);// test- failed
userRouter.post('/users/register', userRegister);
userRouter.post('/users/login', userLogin);
userRouter.post('/users/logout', isAuthenticated, userLogout);

//export user 
export default userRouter;