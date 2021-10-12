import mongoose from 'mongoose';
const { Schema } = mongoose;
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema({
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

const options = {
    usernameField: 'email',
    errorMessages: {
        UserExistsError:
            'The email provided is already registered. Please try logging in, or use another email.'
    }
};

userSchema.plugin(passportLocalMongoose, options);

// Custom messages for common errors
userSchema.post('save', (error, doc, next) => {
    if (
        error.name === 'MongoError' &&
        error.code === 11000 &&
        error.keyValue.email
    ) {
        next(new Error('Email is already associated with an account.'));
    } else {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

export default User;
