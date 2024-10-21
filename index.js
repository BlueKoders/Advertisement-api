import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import vendorRouter from './routes/vendor.js';
import userRouter from './routes/user.js';



// connect to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());


// use routes
app.use(vendorRouter);
app.use(userRouter);


// listen for incoming request
app.listen(3310, () => {
    console.log('app is listening on port 3310');
})