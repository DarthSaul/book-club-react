import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import connectDB from './config/db.js';
connectDB();

import path from 'path';

import profiles from './api/routes/profiles.js';
import books from './api/routes/books.js';

app.use(express.json());

app.use('/api/profile', profiles);
app.use('/api/books', books);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`CONNECTED TO PORT ${PORT}`));
