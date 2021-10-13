import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const apiKey = process.env.BOOKS_API_KEY;

async function getBooks() {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const books = getBooks().then(res => {
    const data = {
        count: 0,
        books: []
    };
    res.items.map(el => {
        el.volumeInfo;
        data.count += 1;
        data.books.push({
            title: `${el.volumeInfo.title}`
        });
    });
    console.log(data);
});
