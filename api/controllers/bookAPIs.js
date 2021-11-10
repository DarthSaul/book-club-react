import dotenv from 'dotenv';
dotenv.config();
import { googleBooks } from '../../bookAPIs/googleBooks.js';
import { openLibrary } from '../../bookAPIs/openLibrary.js';

export default class BooksAPICtrl {
    static async apiGoogleBooksQuery(req, res, next) {
        try {
            const data = await googleBooks({
                title: 'harry potter'
            });
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
    static async apiOpenLibQuery(req, res, next) {
        try {
            const data = await openLibrary({
                title: 'harry',
                author: 'j. k. row'
            });
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
}