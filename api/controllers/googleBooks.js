import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const apiKey = process.env.BOOKS_API_KEY;
import { getBooks } from '../../googleBooks/index.js';

export default class GoogleBooksCtrl {
    static async apiGoogleBooksQuery(req, res, next) {
        try {
            const data = await getBooks();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
}
