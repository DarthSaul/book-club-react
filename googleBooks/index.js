import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const apiKey = process.env.BOOKS_API_KEY;

export async function getBooks() {
    try {
        const data = {
            count: 0,
            books: []
        };
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=harry%20potter+inauthor:rowling&key=${apiKey}`
        );
        response.data.items.map(el => {
            // console.log(el.volumeInfo);
            const { title, authors, publishedDate, categories, imageLinks } =
                el.volumeInfo;
            data.count += 1;
            data.books.push({
                title,
                authors,
                publishedDate,
                categories,
                imageLinks
            });
        });
        return data;
    } catch (err) {
        console.error(err);
    }
}

// getBooks()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// async function showBooks() {
//     try {
//         const books = await getBooks();
//         console.log(books);
//     } catch (err) {
//         console.error(error);
//     }
// }

// showBooks();
