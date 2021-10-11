import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    firstPub: Date,
    genres: [String],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ],
    reviews: [
        {
            text: String,
            date: Date,
            profile: {
                type: Schema.Types.ObjectId,
                ref: 'Profile'
            }
        }
    ]
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
