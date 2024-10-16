import express from 'express';
import cors from 'cors';





// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors())