import express from 'express';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from "dotenv";
import './db/index.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

import configureApp from "./configs/index.js";
configureApp(app);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Server online');
});

app.use('/books', booksRoute);

import errorHandler from "./error-handling/index.js";
errorHandler(app);

export default app;