const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        lowercase: true
    },// Can be included initially
    profilePicture: String, // Can be included initially
    username: {
        type: String,
        required: [true, 'username is required'],
        minlength: [3, 'username must be greater than 3'],
        unique:[true, 'username already taken']
    }, // Can be included initially
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }]
})


const userModel = model('userModel', userSchema);

module.exports = userModel;