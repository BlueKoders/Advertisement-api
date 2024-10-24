//import express router
import { Router } from "express";
import { userAds, userRegister, userLogin, userLogout, userAd } from "../controllers/user.js";
import { isAuthenticated, userHasPermission } from "../middlewares/auth.js";


//create a router
const userRouter = Router();

//define user routes : get all and get one
userRouter.get('/users/ads', userAds); //TESTING SUCCESSFUL

userRouter.get('/users/:id', userAd);// works by replacing id with db post id. //TESTING SUCCESSFUL

userRouter.post('/users/register', userRegister); //TESTING SUCCESSFUL

userRouter.post('/users/login', userLogin); //TESTING SUCCESSFUL

userRouter.post('/users/logout', isAuthenticated, userLogout); //TESTING SUCCESSFUL


//export user 
export default userRouter;