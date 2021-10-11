import express from 'express';
import BookCtrl from '../controllers/books.js';

const router = express.Router();

router.route('/').get(BookCtrl.apiGetBooks);
router.route('/add').post(BookCtrl.apiAddBook);

export default router;
