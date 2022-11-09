import React from 'react';
import NewComment from '../newComment/NewComment'
import "./Comments.css";

const Comments = ({ comment }) => {
  console.log(comment.commentUserId.usersName)

  return (
    <>
      <div class="comments-container">
       <div class="comment-header">
         {/* <img class="comment-profile-image" src={require('../../images/defaultProfileImage.png')} alt='kyle' /> */}
         <div class="comment-username">{comment.commentUserId.usersName}</div>
         <div class="comment-time">{"{ Comment time }"}</div>
         <div class="comment-name-and-time-container">
                 
         </div>
       </div>
       <div class="comment">{comment.message}</div>
      </div >
    </>
  )
}
export default Comments;


