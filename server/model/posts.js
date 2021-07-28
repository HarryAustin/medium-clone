const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String },
    description: { type: String },
    body: { type: String },
    category: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'user'},
    comments: { type: Schema.Types.ObjectId, ref: 'comments'},
    timePosted: { type: Date, default: Date.now }
})


const posts = model('posts', postSchema);

module.exports = posts;