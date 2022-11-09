const Comment = require('../models/comment');
const TokenGenerator = require('../models/token_generator');

const CommentsController = {
  Index: (req, res) => {
    Comment.find(req.body.post_id).populate('commentUserId').find().populate('commentPostId').find(async (err, comments) => {
      // db.comments.find({commentPostId: ObjectId("636bd83d1b429adadc2e6a8a")})
      // User.findOne({_id:ObjectId("5abf2eaa1068113f1e")})
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ comments: comments, token: token, commentUserId: req.user_id, commentPostId: req.body.post_id });
    });
  },

  Create: (req, res) => {
    const newComment = {
      message: req.body.message,
      commentUserId: req.user_id,
      commentPostId: req.body.post_id
    };

    const comment = new Comment(newComment);

    comment.save(async (err) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: 'OK', token: token });
    });
  }
}

module.exports = CommentsController;
