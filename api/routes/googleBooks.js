import express from 'express';
import GoogleBooksCtrl from '../controllers/googleBooks.js';

const router = express.Router();

router.route('/').get(GoogleBooksCtrl.apiGoogleBooksQuery);

export default router;
