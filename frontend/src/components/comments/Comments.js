<<<<<<< HEAD
import React from "react";
import NewComment from "../newComment/NewComment";
=======
import React from 'react';
>>>>>>> main
import "./Comments.css";
const moment = require('moment')

const Comments = ({ comment }) => {
  const fullDate = new Date(comment.commentCreated);
  const timestamp = moment(fullDate).fromNow()

<<<<<<< HEAD
const Comments = ({}) => {
  return (
    <>
      <NewComment />
      <div class="comments-container">
        <div class="comment-header">
          <img
            class="comment-profile-image"
            src={require("../../images/defaultProfileImage.png")}
            alt="kyle"
          />
          <div class="comment-username">{"{ Name }"}</div>
          <div class="comment-time">{"{ Comment time }"}</div>
          <div class="comment-name-and-time-container"></div>
        </div>
        <div class="comment">{"<example comment>"}</div>
      </div>
=======
  return (
    <>
      <div class="comments-container">
       <div class="comment-header">
         <img class="comment-profile-image" src={require('../../images/defaultProfileImage.png')} alt='kyle' />
         <div class="comment-username">{comment.commentUserId.usersName}</div>
         <div class="comment-time">grumbled back {timestamp}</div>
         <div class="comment-name-and-time-container">
                 
         </div>
       </div>
       <div class="comment">{comment.message}</div>
      </div >
>>>>>>> main
    </>
  );
};
export default Comments;
