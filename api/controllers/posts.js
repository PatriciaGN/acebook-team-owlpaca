const Post = require('../models/post');
const TokenGenerator = require('../models/token_generator');

const PostsController = {
  Index: (req, res) => {
    Post.find(async (err, posts) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ posts: posts, token: token });
    });
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: 'OK', token: token });
    });
  },

  AddAgreeOrDisagree: (req, res) => {
    let findAndUpdate = async (id, agreeOrDisagree) => {
      const filter = { _id: id };
      if (agreeOrDisagree === 'agree') {
        let update = { $inc: { agrees: 1 } };
        await Post.findOneAndUpdate(filter, update);
      } else if (agreeOrDisagree === 'disagree') {
        let update = { $inc: { disagrees: 1 } };
        await Post.findOneAndUpdate(filter, update);
      }
    };

    findAndUpdate(req.body._id, req.body.agree_or_disagree)
      .then(() => {
        res.status(204).json();
      })
      .catch((err) => {
        throw err;
      });
  },
};

module.exports = PostsController;
