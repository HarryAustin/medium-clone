const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user'},
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    body: { type: String }
})


const comments = model('comments', commentSchema);

module.exports = comments;