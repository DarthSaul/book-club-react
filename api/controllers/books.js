import Book from '../../models/Book.js';

export default class ProfileController {
    static async apiGetBooks(req, res, next) {
        const { title, author, genre } = req.query;
        let query = {};
        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }
        if (author) {
            query.author = { $regex: author, $options: 'i' };
        }
        if (genre) {
            query.genre = { $regex: genre, $options: 'i' };
        }
        try {
            const books = await Book.find(query);
            res.json(books);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
    static async apiGetBookById(req, res, next) {
        const { bookId } = req.params;
        try {
            const book = await Book.findById(bookId);
            res.json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
    static async apiAddBook(req, res, next) {
        try {
            const book = new Book(req.body);
            await book.save();
            res.json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
    static async apiGetGenres(req, res, next) {
        let genres = [];
        try {
            genres = await Book.distinct('genres');
            if (genres.length === 0) {
                return res.json({
                    error: 'No genres found.'
                });
            }
            res.json(genres);
        } catch (err) {
            console.error(`Unable to get genres, ${err}`);
            res.status(500).json({ error: err.message });
        }
    }
}
