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

  AddAgree: (req, res) => {
    let findAndUpdate = async (id) => {
      const filter = { _id: id };
      console.log(filter);
      console.log(id);

      const update = { $inc: { agrees: 1 } };
      let post = await Post.findOneAndUpdate(filter, update);
    };
    findAndUpdate(req.body._id)
      .then(() => {
        res.status(204).json();
      })
      .catch((err) => {
        throw err;
      });
  },
};

module.exports = PostsController;
