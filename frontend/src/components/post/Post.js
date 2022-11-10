import React, { useEffect, useState } from "react";
import Comment from "../comments/Comments";
import "./Post.css";

import AgreesAndDisagrees from "../agreesanddisagrees/AgreesAndDisagrees";
import NewComment from "../newComment/NewComment";
const moment = require("moment");

const Post = ({ post, navigate, fetchPosts }) => {
  const fullDate = new Date(post.created);
  const timestamp = moment(fullDate).fromNow();
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    if (token) {
      fetch("/comments?" + post._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setComments(data.comments);
        });
    }
  };

  if (token) {
    return (
      <article data-cy="post" key={post._id}>
        <div class="header-container">
          <img
            class="profile-image"
            src={post.author.profilePic}
            alt="https://avatarfiles.alphacoders.com/654/thumb-1920-65419.jpg"
          />
          <div class="name-and-time-container">
            <div class="username">{post.author.usersName} grumbled</div>
            <div class="post-time">{timestamp}</div>
          </div>

          <div class="message-container">
            <div class="message">{post.message}</div>
          </div>

          <div class="post-image-container">
            <img class="post-image" src={post.imageURL} alt="" />
          </div>
          <div class="agrees-and-disagrees">
            <b>
              <div class="Agrees">👍🏽 {post.agrees}</div>
              <div class="Disagrees">👎🏽 {post.disagrees}</div>
            </b>
          </div>

          <AgreesAndDisagrees post_id={post._id} fetchPosts={fetchPosts} />

          <div id="message-box">
            <NewComment fetchComments={fetchComments} post_id={post._id} />
          </div>
          <div id="feed" role="feed">
            {comments
              .map((comment) => <Comment comment={comment} key={comment._id} />)
              .reverse()}
          </div>
        </div>
      </article>
    );
  }
};

export default Post;
