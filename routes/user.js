//import express router
import { Router } from "express";
import { userAds, userRegister } from "../controllers/user.js";

//create a router
const userRouter = Router();

//define user routes : get all and get one
userRouter.get('/users/ads', userAds)
// userRouter.get('./users/ad',)
userRouter.post('/users/register', userRegister)
// userRouter.post('/users/login',)
// userRouter.post('/users/logout',)

//export user 
export default userRouter;