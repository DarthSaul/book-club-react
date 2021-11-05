import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const apiKey = process.env.BOOKS_API_KEY;

export async function googleBooks(queries) {
    try {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=';
        if ('title' in queries) {
            url += `${queries['title']}+`;
        }
        if ('author' in queries) {
            url += `inauthor:${queries['author']}`;
        }
        url += `&maxResults=25&key=${apiKey}`;
        const response = await axios.get(url); // `https://www.googleapis.com/books/v1/volumes?q=inauthor:rowling*&key=${apiKey}`
        // console.log(response.data);
        const data = {
            count: 0,
            books: []
        };
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
