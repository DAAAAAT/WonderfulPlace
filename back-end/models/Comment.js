const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    content: { type: mongoose.Schema.Types.String, required: true },
    user: {type: ObjectId, ref: 'User', required: true},
    date: {type: mongoose.Schema.Types.Date, required: true}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;