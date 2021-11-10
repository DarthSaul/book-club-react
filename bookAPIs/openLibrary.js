import axios from 'axios';

export async function openLibrary(queries) {
    try {
        let url = 'http://openlibrary.org/search.json?';
        if ('title' in queries) {
            const title = queries['title'].replace(' ', '+');
            url += `title=${title}`;
        }
        if ('author' in queries) {
            const author = queries['author'].replace(' ', '+');
            url += `&author=${author}*`;
        }
        url += '&limit=10';
        const response = await axios.get(url);
        const data = {
            count: 0,
            books: []
        };
        response.data.docs.map(doc => {
            const { title, author_name, first_publish_year } = doc;
            data.count += 1;
            data.books.push({
                title,
                author_name,
                first_publish_year
            });
        });
        return data;
    } catch (err) {
        console.error(err);
    }
}