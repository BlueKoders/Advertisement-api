import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import vendorRouter from './routes/vendor.js';
import userRouter from './routes/user.js';
import advertRouter from './routes/advert.js';


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
app.use(advertRouter);


// listen for incoming request
const PORT = 3310
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
    
});