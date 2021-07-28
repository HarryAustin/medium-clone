const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        lowercase: true
    },
    profilePicture: String,
    username: {
        type: String,
        required: [true, 'username is required'],
        minlength: [3, 'username must be greater than 3'],
        unique:[true, 'username already taken']
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }]
})


const userModel = model('userModel', userSchema);

module.exports = userModel;