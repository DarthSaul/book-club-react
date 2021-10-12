import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied.' });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Token is not valid' });
            } else {
                req.user = decoded.user;
                return next();
            }
        });
    } catch (err) {
        console.error('Whoops, something wrong with auth middleware...');
        res.status(500).json({ msg: 'Server Error' });
    }
};
