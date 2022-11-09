const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  commentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  commentPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;