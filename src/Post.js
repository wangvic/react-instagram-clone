import React, { useState, useEffect } from 'react';
import './Post.css';
import Avartar from '@material-ui/core/Avatar';
import firebase, { db } from './firebase';

function Post({ postId, username, user, caption, imageUrl }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .onSnapshot((snapshot) =>
          setComments(snapshot.docs.map((doc) => doc.data()))
        );
    }
    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avartar
          className="post__avatar"
          alt="vic.leiwang"
          src="static/images/avartar/1.jpg"
        />
        <h3>{username}</h3>
        <h4 className="post__text">{username}</h4>
      </div>

      <img className="post__image" src={imageUrl} alt=""></img>

      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
