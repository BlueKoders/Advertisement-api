import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import vendorRouter from './routes/vendor.js';


// connect to database


// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());


// use routes
app.use(vendorRouter);


// listen for incoming request
app.listen(3310, () => {
    console.log('app is listening on port 3310');
})