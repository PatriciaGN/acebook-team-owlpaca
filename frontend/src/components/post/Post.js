import React from 'react';
import Comments from '../comments/Comments';
import AgreesAndDisagrees from '../agreesanddisagrees/AgreesAndDisagrees';
import './Post.css';
const moment = require('moment');

const Post = ({ post, fetchPosts }) => {
  const fullDate = new Date(post.created);
  const timestamp = moment(fullDate).startOf('year').fromNow();

  return (
    <article data-cy="post" key={post._id}>
      <div class="header-container">
        <img
          class="profile-image"
          src="https://iili.io/mVK9G2.png"
          alt="kyle"
        />
        <div class="name-and-time-container">
          <div class="username">{'{ Name }'}</div>
          <div class="post-time">{timestamp}</div>
        </div>
      </div>

      <div class="message-container">
        <div class="message">{post.message}</div>
      </div>

      <div class="post-image-container">
        <img
          class="post-image"
          src="https://i.postimg.cc/T5vGJyXj/kyle.png"
          alt="kyle"
        />
      </div>

      <div class="agrees-and-disagrees">
        <div class="Agrees">Agrees:{post.agrees}</div>
        <div class="Likes">Disagrees:{post.disagrees}</div>
      </div>

      <AgreesAndDisagrees post_id={post._id} fetchPosts={fetchPosts} />
      <Comments />
    </article>
  );
};

export default Post;
