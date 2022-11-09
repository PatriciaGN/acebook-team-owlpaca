import React, { useEffect, useState } from 'react';
import Comment from '../comments/Comments'
import Hates from '../hates/Hates'
import "./Post.css";
import NewComment from '../newComment/NewComment'

const Post = ({ post, navigate }) => {
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = () => {
    if (token) {
      fetch('/comments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem('token', data.token);
          setToken(window.localStorage.getItem('token'));
          setComments(data.comments);
        });
    }
  }

  if (token) {
  return (
    <article data-cy="post" key={post._id}>
      <div class="header-container">
        <img class="profile-image" src='https://iili.io/mVK9G2.png' alt='kyle' />
        <div class="name-and-time-container">
          <div class="username">{post.author.usersName} grumbled</div>
          <div class="post-time">{"{ Post time }"}</div>
        </div>
      </div>

      <div class="message-container">
        <div class="message">{post.message}</div>
        </div>
      
      <div class="post-image-container">
        <img class="post-image" src={post.imageURL} alt='kyle' />
      </div>
    
      <Hates />
      <div id="message-box">
            <NewComment  fetchComments={fetchComments} post_id={post._id}/>
      </div>
      <div id='feed' role='feed'>
        {comments.map(
          (comment) => (<Comment comment={comment} key={comment._id} />)
         ).reverse()}
      </div>
    </article>
  )
  } else {
    navigate('/login')
  }
}

export default Post;
