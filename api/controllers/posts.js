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
      const update = { $inc: { agrees: 1 } };
      let post = Post.findOneAndUpdate(filter, update);
      // db.posts.findOneAndUpdate({_id:ObjectId("636bbcdb4a3b852574c4c3ad")},{$set:{"agrees":"1000"}})
      console.log('thingis from findAndUpdate', post._id, post.agrees);
    };
    console.log('req.body.id from controler', req.body._id);
    findAndUpdate(req.body._id)
      .then(() => {
        // console.log('res from findAndUpdate', res);
        res.status(204);
        // await console.log('res from controler', res);
      })
      .catch((err) => {
        // console.log(err);
        // throw err;
      });

    // Post.findOneAndUpdate({ _id: `${req.id}` }, { $inc: { agrees: 1 } });

    // const post = Post.findOne({ _id: req._id }, async (err) => {
    //   console.log('request', req);
    //   console.log('response', res);
    //   if (err) {
    //     throw err;
    //   }
    // });
    // post.updateOne({ agrees: { $inc: 1 } });
  },
};

module.exports = PostsController;
