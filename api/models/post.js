const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  imageURLs: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  agrees: {
    type: Number,
    default: 0,
  },
  disagrees: {
    type: Number,
    default: 0,
  },
  message: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/.test(v);
      },
      message: 'Format is incorrect', // There NEEDS to be a message in order to be able to test this, otherwise it will timeout.
    },
    required: [true],
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
