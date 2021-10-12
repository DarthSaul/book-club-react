import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

import User from '../../models/User.js';

export default class UserController {
    static async apiRegisterUser(req, res, next) {
        const { email, password } = req.body;
        try {
            const newUser = new User({ email });
            const registerUser = await User.register(newUser, password);
            const { error } = registerUser;
            if (error) {
                throw new Error(error);
            }
            req.login(registerUser, err => {
                if (err) {
                    return next(err);
                }
                const payload = {
                    user: {
                        id: registerUser.id
                    }
                };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    }
                );
            });
        } catch (err) {
            console.error(err);
            return res.status(401).json({ error: err.message });
        }
    }
    static async apiLoginUser(req, res, next) {
        const payload = {
            user: {
                id: req.user.id
            }
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    }
}
