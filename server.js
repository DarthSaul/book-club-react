import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import connectDB from './config/db.js';
connectDB();

import path from 'path';

import profile from './api/routes/profile.js';

app.use(express.json());

app.use('/api/profile', profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`CONNECTED TO PORT ${PORT}`));
