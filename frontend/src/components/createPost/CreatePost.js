import React, { useState, useEffect } from 'react';
import errorHandlerMessage from '../errorHandling/errorHandlerMessage';
import './CreatePost';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import './CreatePost.css';

const CreatePost = ({ navigate, fetchPosts }) => {
  const token = window.localStorage.getItem('token');
  const [message, setMessage] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState('');

  const handleSubmitPost = async (event) => {
    event.preventDefault();
    if (imageUpload === '' && message === '') return;
    if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) return;

    let response = await fetch('/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: message, imageURL: image }),
    });
    if (response.status !== 201) {
      navigate('/posts');
    } else {
      let data = await response.json();
      window.localStorage.setItem('token', data.token);
      setMessage('');
      fetchPosts();
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const UploadImage = (event) => {
    event.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
  };

  return (
    <>
      <form id="submit-post-form" onSubmit={handleSubmitPost}>
        <b>
          <label id="post-a-message-label">
            Grumble away friend, we're listening:
          </label>
        </b>
        <textarea
          placeholder="Grumble away!"
          id="message"
          value={message}
          onChange={handleMessageChange}
        />
        <div id="ErrorMessageMessage">{errorHandlerMessage(message)}</div>{' '}
        <div id="message-button-container">
          <input
            class="message-button"
            id="submit"
            type="submit"
            value="Post your grumble"
          />
        </div>
        <div id="image-buttons">
          <button id="submit" class="upload-photo" onClick={UploadImage}>
            Upload Photo
          </button>{' '}
          <br></br>
          <input
            type="file"
            className="upload-photo"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default CreatePost;
