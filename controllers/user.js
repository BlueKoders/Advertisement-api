//import user model here
import { UserModel } from "../models/user.js";
import { userRegisterValidator, userloginValidator,} from "../validators/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration, login and logout
export const userRegister = async (req, res, next)=>{
    try {
        //validate user input with joi
        const {error, value} = userRegisterValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
        //check if user does not exist
        const user = await UserModel.findOne({
            email: value.email

        });
        if (user){
            return res.status(409).json('User already exist!')
        }
        //hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        //save user info to database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        //send user confirmational email
        //respond to request
        res.json(`You have registered as ${value.username} `)
    } catch (error) {
        next(error);
    }
} 

//user login
export const userLogin = async (req, res, next)=>{
try {
    //validate user input
    const { error, value} = userloginValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error)
    }
    //find user with identifier using a key from the user
    const user = await UserModel.findOne({email: value.email})
    if (!user) {
        return res.status(404).json('User does not exist!')
    }
    //compare their password
    const correctPassword = bcrypt.compareSync(value.password, user.password);
    if (!correctPassword){
        return res.status(401).json('Invalid Credentials')
    }
    //sign a token for the user
    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_PRIVATE_KEY,
        {expiresIn: '24h'}
    );
    //save to their database
    //respond to request
    res.json({
        message: 'User logged in!',
        accessToken: token
    });
} catch (error) {
   next(error) 
}
};

//user display
export const  userAds = (req, res, next) => {
      try {
        //validate user
        //respond to user
      res.status(200).json('Welcome and happy shopping!')
      } catch (error) {
        next(error);
      }
}
