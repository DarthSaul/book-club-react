import mongoose from 'mongoose';
const { Schema } = mongoose;

const profileSchema = new Schema({
    user: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    reading: [
        {
            type: String
        }
    ],
    completedBooks: [
        {
            type: String
        }
    ],
    readingList: [
        {
            type: String
        }
    ]
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
