import express from 'express';
import BooksAPICtrl from '../controllers/bookAPIs.js';

const router = express.Router();

router.route('/google').get(BooksAPICtrl.apiGoogleBooksQuery);
router.route('/open_lib').get(BooksAPICtrl.apiOpenLibQuery);

export default router;
