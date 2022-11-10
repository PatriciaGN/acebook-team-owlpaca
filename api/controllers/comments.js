const Comment = require('../models/comment');
const TokenGenerator = require('../models/token_generator');
// const ObjectId = require('mongodb').objectId
// const uId = ObjectId("636cd676db78901f4576afed")

const CommentsController = {
  Index: (req, res) => {
    // const newComment = Comment.find('Feedback again')
    const queryPostId = (Object.keys(req.query))[0]
    Comment.find({"commentPostId": queryPostId}).populate('commentPostId').find().populate('commentUserId').find(async (err, comments) => {
      // console.log(comments)
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ comments: comments, token: token, commentUserId: req.user_id, commentPostId: req.body.postId });
    });
  },

  Create: (req, res) => {
    console.log(req.body)
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
