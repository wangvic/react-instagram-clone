import React from 'react';
import './Post.css';
import Avartar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avartar
          className="post__avatar"
          alt="vic.leiwang"
          src="static/images/avartar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl}></img>

      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
