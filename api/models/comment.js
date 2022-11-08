const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  commentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;