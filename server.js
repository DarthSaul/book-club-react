import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import connectDB from './config/db.js';
connectDB();

// import path from 'path';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import cors from 'cors';
import flash from 'connect-flash';

import User from './models/User.js';

import users from './api/routes/users.js';
import profiles from './api/routes/profiles.js';
import books from './api/routes/books.js';
import googleBooks from './api/routes/googleBooks.js';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/user', users);
app.use('/api/profile', profiles);
app.use('/api/books', books);
app.use('/api/google_books', googleBooks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`CONNECTED TO PORT ${PORT}`));
